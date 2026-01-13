import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        bgImage: z.string(),
        description: z.string(),
        keywords: z.string(),
        readtime: z.string(),
        locale: z.string(),
        date: z.string(),
      }),
    }),
  },
});
