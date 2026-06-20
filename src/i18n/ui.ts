import type { Locale } from './config';

type UiStrings = {
    blog: {
        title: string;
        description: string;
    };
    common: {
        featured: string;
        updatedOn: string;
        continueReading: string;
        latestArticles: string;
        viewAllPosts: string;
        readNext: string;
        rssTitle: string;
    };
    navigation: {
        primary: string;
        footer: string;
        openMenu: string;
        closeMenu: string;
        languageSwitcher: string;
    };
    pagination: {
        label: string;
        pageOf: (currentPage: number, lastPage: number) => string;
        goToPage: (page: number, lastPage: number) => string;
    };
};

export const ui = {
    en: {
        blog: {
            title: 'Blog',
            description: 'Notes on frontend architecture, engineering leadership, and fullstack development.'
        },
        common: {
            featured: 'Featured',
            updatedOn: 'Updated on',
            continueReading: 'Continue Reading',
            latestArticles: 'Latest Articles',
            viewAllPosts: 'View All Posts',
            readNext: 'Read Next',
            rssTitle: 'RSS'
        },
        navigation: {
            primary: 'Primary navigation',
            footer: 'Footer navigation',
            openMenu: 'Open Menu',
            closeMenu: 'Close Menu',
            languageSwitcher: 'Language switcher'
        },
        pagination: {
            label: 'Pagination',
            pageOf: (currentPage, lastPage) => `Page ${currentPage} of ${lastPage}`,
            goToPage: (page, lastPage) => `Go to page ${page} of ${lastPage}`
        }
    },
    pl: {
        blog: {
            title: 'Blog',
            description: 'Notatki o architekturze frontendu, przywodztwie technicznym i programowaniu fullstack.'
        },
        common: {
            featured: 'Wyróżnione',
            updatedOn: 'Zaktualizowano',
            continueReading: 'Czytaj dalej',
            latestArticles: 'Najnowsze artykuły',
            viewAllPosts: 'Zobacz wszystkie wpisy',
            readNext: 'Czytaj dalej',
            rssTitle: 'RSS'
        },
        navigation: {
            primary: 'Główna nawigacja',
            footer: 'Nawigacja w stopce',
            openMenu: 'Otwórz menu',
            closeMenu: 'Zamknij menu',
            languageSwitcher: 'Przełącznik języka'
        },
        pagination: {
            label: 'Paginacja',
            pageOf: (currentPage, lastPage) => `Strona ${currentPage} z ${lastPage}`,
            goToPage: (page, lastPage) => `Przejdź do strony ${page} z ${lastPage}`
        }
    }
} satisfies Record<Locale, UiStrings>;
