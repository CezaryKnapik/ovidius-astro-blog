import type { CollectionEntry } from 'astro:content';
import { defaultLocale, localeMetadata, locales, type Locale } from '../i18n/config';
import type { AlternateLink } from '../types';

type LocalizedEntry = CollectionEntry<'blog'> | CollectionEntry<'pages'>;
type ContentType = 'blog' | 'page';

// Builds a site-relative URL for a locale while preserving unprefixed English URLs.
export function localizedPath(locale: Locale, path: string) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const shouldKeepTrailingSlash = normalizedPath !== '/' && normalizedPath.endsWith('/');
    const pathWithoutTrailingSlash = normalizedPath === '/' ? normalizedPath : normalizedPath.replace(/\/$/, '');
    const localizedPathWithoutTrailingSlash =
        locale === defaultLocale ? pathWithoutTrailingSlash : pathWithoutTrailingSlash === '/' ? `/${locale}/` : `/${locale}${pathWithoutTrailingSlash}`;

    if (shouldKeepTrailingSlash && !localizedPathWithoutTrailingSlash.endsWith('/')) {
        return `${localizedPathWithoutTrailingSlash}/`;
    }

    return localizedPathWithoutTrailingSlash;
}

// Removes optional locale folders from collection IDs before they become public slugs.
export function getContentSlug(entryOrId: Pick<LocalizedEntry, 'id'> | string) {
    const id = typeof entryOrId === 'string' ? entryOrId : entryOrId.id;
    const localePrefix = locales.find((locale) => id.startsWith(`${locale}/`));

    return localePrefix ? id.slice(localePrefix.length + 1) : id;
}

// Builds the public URL for a blog post in the requested locale.
export function postUrl(locale: Locale, entryOrId: Pick<CollectionEntry<'blog'>, 'id'> | string) {
    return localizedPath(locale, `/blog/${getContentSlug(entryOrId)}/`);
}

// Builds the public URL for a static content page in the requested locale.
export function pageUrl(locale: Locale, entryOrId: Pick<CollectionEntry<'pages'>, 'id'> | string) {
    return localizedPath(locale, `/${getContentSlug(entryOrId)}/`);
}

// Keeps collection queries scoped to the current locale.
export function filterByLocale<Entry extends { data: { locale: Locale } }>(entries: Entry[], locale: Locale) {
    return entries.filter((entry) => entry.data.locale === locale);
}

// Returns deterministic alternate links for routes that exist in both languages.
export function getRouteAlternateLinks(path: string): AlternateLink[] {
    return locales.map((locale) => ({
        locale,
        href: localizedPath(locale, path),
        label: localeMetadata[locale].label,
        hreflang: localeMetadata[locale].hreflang
    }));
}

// Returns alternate links for translated content entries sharing a translation key.
export function getContentAlternateLinks(entries: LocalizedEntry[], currentEntry: LocalizedEntry, contentType: ContentType): AlternateLink[] {
    return entries
        .filter((entry) => entry.data.translationKey === currentEntry.data.translationKey)
        .map((entry) => {
            const href = contentType === 'blog' ? postUrl(entry.data.locale, entry.id) : pageUrl(entry.data.locale, entry.id);

            return {
                locale: entry.data.locale,
                href,
                label: localeMetadata[entry.data.locale].label,
                hreflang: localeMetadata[entry.data.locale].hreflang
            };
        });
}
