import type { Locale } from './i18n/config';

export type ImageInput = {
    src: ImageMetadata | string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: ImageInput;
    backgroundImage?: ImageInput;
};

export type SiteConfig = {
    title: string;
    description: string;
    image?: ImageInput;
    navLinks?: Link[];
    hero?: Hero;
    postsPerPage?: number;
};

export type AlternateLink = {
    locale: Locale;
    href: string;
    label: string;
    hreflang: string;
};
