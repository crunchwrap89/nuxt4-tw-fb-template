import { queryCollection } from '@nuxt/content/server';

export default defineSitemapEventHandler(async (event) => {
  const enDocs = await queryCollection(event, 'content')
    .where('locale', 'LIKE', 'en')
    .order('date', 'ASC')
    .all();
  const sitemaps = [...enDocs];

  return sitemaps.flat().map(entry => ({
    _sitemap: 'en-US',
    loc: `/articles${entry.path}`,
    lastmod: entry.date,
  }),
  );
});
