import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/test-utils'],
  ssr: true,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Template title',
      meta: [
        {
          name: 'description',
          content:
              'Template description, please fill in with something relevant and with optimized amount of words for SEO.',
        },
        {
          name: 'keywords',
          content:
              'add, 10-20, relevant, keywords, here, separated, by, commas',
        },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://template.com' },
        {
          name: 'og:title',
          content: 'Template title',
        },
        {
          name: 'og:image',
          content: 'https://template.com/logo_fb1200x600.png',
        },
        {
          name: 'og:description',
          content:
              'Template description, please fill in with something relevant and with optimized amount of words for SEO.',
        },
        {
          name: 'og:site_name',
          content: 'Template title',
        },
        { name: 'twitter:site', content: '@crunchwrap89' },
        {
          name: 'twitter:title',
          content: 'Template title',
        },
        {
          name: 'twitter:description',
          content:
              'Template description, please fill in with something relevant and with optimized amount of words for SEO.',
        },
        {
          name: 'twitter:image:src',
          content: 'https://template.com/logo_twitter600x330.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'template.com',
        },
        {
          name: 'forem:name',
          content: 'Template title',
        },
        {
          name: 'forem:logo',
          content: 'https://template.com/android-chrome-512x512.png',
        },
        { name: 'forem:domain', content: 'template.com' },
        {
          name: 'application-name',
          content: 'template.com',
        },
      ],
      link: [
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          href: `https://template.com/rss.xml`,
        },
      ],
    },
  },
  css: ['./app/assets/css/main.css'],
  site: { url: 'https://template.com' },
  routeRules: {
    '/something/**': { ssr: false },
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/rss.xml'],
    },
    compressPublicAssets: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  pwa: {
    registerType: 'prompt',
    client: {
      periodicSyncForUpdates: 86400, // 24 hours
    },
    workbox: {
      maximumFileSizeToCacheInBytes: 50 * 1024 * 1024, // 50MB
      globPatterns: ['**/*.{glb,css,webp,png,svg,webmanifest,ico,js,mjs,cjs,txt}'],
      globIgnores: [
        '/_payload.json',
        '/node_modules',
      ],
      navigateFallback: null,
    },
    manifest: {
      name: 'template.com',
      short_name: 'template.com',
      description: 'Template description, please fill in with something relevant and with optimized amount of words for SEO.',
      lang: 'en',
      background_color: '#F1F1F1',
      theme_color: '#F1F1F1',
      display: 'fullscreen',
      orientation: 'portrait',
      start_url: '/',
      id: 'template.com',
      display_override: ['standalone', 'minimal-ui', 'browser'],
      categories: ['development', 'education'],
      launch_handler: {
        client_mode: ['focus-existing', 'auto'],
      },
      screenshots: [
        {
          src: 'https://template.com/logo_fb1200x600.png',
          sizes: '1200x600',
          type: 'image/webp',
          form_factor: 'wide',
        },
      ],
      icons: [
        {
          src: 'img/brand/pwa-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'img/brand/pwa-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'img/brand/pwa-120x120.png',
          sizes: '120x120',
          type: 'image/png',
        },
        {
          src: 'img/brand/pwa-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: 'img/brand/pwa-167x167.png',
          sizes: '167x167',
          type: 'image/png',
        },
        {
          src: 'img/brand/pwa-180x180.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: 'img/brand/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'img/brand/pwa-384x384.webp',
          sizes: '384x384',
          type: 'image/webp',
        },
        {
          src: 'img/brand/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'img/brand/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },
  sitemap: {
    discoverImages: true,
    sources: [
      '/api/__sitemap__/urls',
    ],
    exclude: [],
  },
});
