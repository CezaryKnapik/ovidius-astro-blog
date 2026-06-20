import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getSiteConfig } from '../../data/site-config';
import { filterByLocale, postUrl } from '../../utils/i18n';
import { sortPostsByDateDesc } from '../../utils/post-utils';

export async function GET(context) {
    const locale = 'pl';
    const siteConfig = getSiteConfig(locale);
    const posts = filterByLocale(await getCollection('blog'), locale).sort(sortPostsByDateDesc);
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: posts.map((item) => ({
            title: item.data.title,
            description: item.data.excerpt,
            link: postUrl(locale, item),
            pubDate: item.data.publishDate.setUTCHours(0)
        }))
    });
}
