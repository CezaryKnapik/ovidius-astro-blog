export const defaultLocale = 'en';
export const locales = ['en', 'pl'] as const;

export type Locale = (typeof locales)[number];

type LocaleMetadata = {
    label: string;
    shortLabel: string;
    htmlLang: string;
    hreflang: string;
    dateLocale: string;
};

export const localeMetadata = {
    en: {
        label: 'English',
        shortLabel: 'EN',
        htmlLang: 'en',
        hreflang: 'en-US',
        dateLocale: 'en-US'
    },
    pl: {
        label: 'Polski',
        shortLabel: 'PL',
        htmlLang: 'pl',
        hreflang: 'pl-PL',
        dateLocale: 'pl-PL'
    }
} satisfies Record<Locale, LocaleMetadata>;

// Checks whether a string is one of the locales supported by the site.
export function isLocale(value: string): value is Locale {
    return value === 'en' || value === 'pl';
}
