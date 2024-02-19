FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

FROM base AS build
WORKDIR /app
COPY . .
COPY --from=prod-deps /app/node_modules ./node_modules
RUN pnpm run build
RUN pnpm prune --prod

FROM base AS deploy
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist/
EXPOSE 3000
CMD [ "node", "dist/main.js" ]


