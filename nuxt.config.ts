import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/content',
    'nuxt-vuefire',
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/test-utils'],
  ssr: true,
  devtools: { enabled: true },
  runtimeConfig: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    appId: '',
  },
  app: {
    head: {
      title: 'template-title-placeholder',
      meta: [
        {
          name: 'description',
          content: 'template-description-placeholder',
        },
        {
          name: 'keywords',
          content: 'template-keywords-placeholder',
        },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://template.com' },
        {
          name: 'og:title',
          content: 'template-title-placeholder',
        },
        {
          name: 'og:image',
          content: 'https://template.com/logo_fb1200x600.png',
        },
        {
          name: 'og:description',
          content: 'template-description-placeholder',
        },
        {
          name: 'og:site_name',
          content: 'template-title-placeholder',
        },
        { name: 'twitter:site', content: '@crunchwrap89' },
        {
          name: 'twitter:title',
          content: 'template-title-placeholder',
        },
        {
          name: 'twitter:description',
          content: 'template-description-placeholder',
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
          content: 'template-title-placeholder',
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
      globPatterns: ['**/*.{glb,css,webp,webm,png,svg,webmanifest,ico,js,mjs,cjs,txt}'],
      globIgnores: [
        '/_payload.json',
        '/node_modules',
      ],
      navigateFallback: null,
      cleanupOutdatedCaches: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
    manifest: {
      name: 'template.com',
      short_name: 'template.com',
      description: 'template-description-placeholder',
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
  vuefire: {
    emulators: {
      enabled: true,
      auth: {
        options: {
          disableWarnings: true,
        },
      },
    },
    auth: {
      enabled: true,
    },
    config: {
      apiKey: process.env.NUXT_API_KEY,
      authDomain: process.env.NUXT_AUTH_DOMAIN,
      projectId: process.env.NUXT_PROJECT_ID,
      appId: process.env.NUXT_APP_ID,
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
