import RSS from 'rss';
import { queryCollection } from '@nuxt/content/server';

export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: 'template-title-placeholder',
    description: 'template-description-placeholder',
    site_url: 'https://template.com',
    feed_url: `https://template.com/rss.xml`,
  });

  const docs = await queryCollection(event, 'content').where('locale', 'LIKE', 'en').order('date', 'DESC').all();

  for (const doc of docs) {
    feed.item({
      title: doc.title ?? '-',
      url: `https://template.com/articles${doc.path}`,
      date: doc.date,
      description: doc.description,
    });
  }

  const feedString = feed.xml({ indent: true });
  event.node.res.setHeader('content-type', 'text/xml');
  event.node.res.end(feedString);
});
