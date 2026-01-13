# ---------- Build stage ----------
FROM node:22-slim AS build

WORKDIR /app

ENV NUXT_API_KEY=AiRoffelAbcdefghijklmnopqrstuvwxyz123456

COPY package.json yarn.lock ./
RUN corepack enable && yarn install --frozen-lockfile

COPY . .
RUN yarn build

# ---------- Runtime stage ----------
FROM node:22-slim AS production

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
