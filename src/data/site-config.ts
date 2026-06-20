import heroAvatar from '../assets/images/avatar.jpg';
import heroBackground from '../assets/images/hero.webp';
import { type Locale } from '../i18n/config';
import type { SiteConfig } from '../types';
import { localizedPath } from '../utils/i18n';

const sharedConfig = {
    title: 'Cezary Knapik',
    image: {
        src: heroAvatar,
        alt: 'Cezary Knapik'
    },
    postsPerPage: 5
} satisfies Pick<SiteConfig, 'title' | 'image' | 'postsPerPage'>;

// Builds navigation links with the correct locale prefix.
function createNavLinks(locale: Locale) {
    return [
        {
            text: locale === 'pl' ? 'Strona główna' : 'Home',
            href: localizedPath(locale, '/')
        },
        {
            text: 'Blog',
            href: localizedPath(locale, '/blog')
        },
        {
            text: locale === 'pl' ? 'O mnie' : 'About',
            href: localizedPath(locale, '/about')
        },
        {
            text: locale === 'pl' ? 'Kontakt' : 'Contact',
            href: localizedPath(locale, '/contact')
        }
    ];
}

const siteConfigs = {
    en: {
        ...sharedConfig,
        description: 'Fullstack Team Lead | React, TypeScript, NodeJS, PHP | Frontend Architecture & Engineering Management',
        navLinks: createNavLinks('en'),
        hero: {
            title: 'Hi there!',
            text: "I'm Cezary Knapik, a software engineering leader with over 9 years of experience building and scaling complex web applications. I lead frontend development for a large-scale internal ERP system, bridging technical strategy and hands-on execution with React, TypeScript, and PHP.",
            avatar: {
                src: heroAvatar,
                alt: 'Cezary Knapik'
            },
            backgroundImage: {
                src: heroBackground
            }
        }
    },
    pl: {
        ...sharedConfig,
        description: 'Fullstack Team Lead | React, TypeScript, NodeJS, PHP | Architektura frontendu i zarządzanie zespołem',
        navLinks: createNavLinks('pl'),
        hero: {
            title: 'Cześć!',
            text: 'Nazywam się Cezary Knapik. Jestem liderem inżynierii oprogramowania z ponad 9-letnim doświadczeniem w budowaniu i skalowaniu złożonych aplikacji webowych. Prowadzę rozwój frontendu dużego wewnętrznego systemu ERP, łącząc strategię techniczną z codzienną pracą w React, TypeScript i PHP.',
            avatar: {
                src: heroAvatar,
                alt: 'Cezary Knapik'
            },
            backgroundImage: {
                src: heroBackground
            }
        }
    }
} satisfies Record<Locale, SiteConfig>;

// Returns the complete site configuration for a locale.
export function getSiteConfig(locale: Locale) {
    return siteConfigs[locale];
}
