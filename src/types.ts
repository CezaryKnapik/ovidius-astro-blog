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
    logo?: ImageInput;
    title: string;
    description: string;
    image?: ImageInput;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    hero?: Hero;
    postsPerPage?: number;
};

export type AlternateLink = {
    locale: Locale;
    href: string;
    label: string;
    hreflang: string;
};
