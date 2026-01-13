# Nuxt 4 + Tailwind CSS + Firebase Template

A modern, high-performance starter template featuring Nuxt 4, Tailwind CSS, and Firebase integration.

## Features

- **Nuxt 4**: The latest version of the intuitive Vue framework.
- **Tailwind CSS 4**: Utility-first CSS framework with Vite integration.
- **Firebase / VueFire**: Ready-to-use Firebase integration including Auth and Emulators.
- **Nuxt Content**: Write your content in Markdown and query it with ease.
- **PWA Ready**: Progressive Web App support out of the box.
- **Testing**: Vitest and Nuxt Test Utils configured.
- **SEO & Sitemap**: Pre-configured Sitemap and RSS feed generation.
- **Linting**: ESLint with Nuxt module.

## Setup

Make sure to install dependencies:

```bash
# yarn 
yarn install
```

### Firebase Setup

```
- Go to FB Project → RTDB → Enable RTDB → Select region → Start in Test mode.
- Go to FB Project → Firestore → Enable Firestore → Select region → Start in Test mode.

- Go to Project Overview → Add App → Web → Name App → Retrieve API Keys.
- Add API Keys in .env.example and rename to .env
```

```
- Go to FB Project → Auth → Enable Auth → Email/Password enable. & Google Provider enable.
- Auth → Settings → Authorized domains → Add
- Next steps for Custom auth domain: https://medium.com/@citi_zen/quick-guide-setting-up-google-oauth2-login-with-a-custom-domain-in-firebase-auth-fc86c328682d
```

```
- Project settings → Service accounts → Generate service account key → add to service-account.json
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

### Firebase Emulators

To start the Firebase emulators:

```bash
yarn emulate
```

## Testing

Run tests with Vitest:

```bash
yarn test
```

## Production

Build the application for production:

```bash
yarn build
```


Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
