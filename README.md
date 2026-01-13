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
# yarn (recommended)
yarn install

# npm
npm install

# pnpm
pnpm install

# bun
bun install
```

## Development

### Environment Variables

Copy `.env.example` to `.env` and fill in your Firebase credentials:

```bash
cp .env.example .env
```

### Development Server

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

Locally preview production build:

```bash
yarn preview
```

## Docker

You can also run the application using Docker:

```bash
# Build and run with docker-compose
docker-compose up --build
```

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
