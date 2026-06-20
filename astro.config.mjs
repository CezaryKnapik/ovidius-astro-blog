import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://ovidius-astro-theme.netlify.app',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'pl'],
        routing: {
            prefixDefaultLocale: false
        }
    },
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        mdx(),
        sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en-US',
                    pl: 'pl-PL'
                }
            }
        })
    ]
});
