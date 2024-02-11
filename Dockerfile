ARG NEXT_PUBLIC_BASE_PATH=/ui

FROM node:20-alpine as base

FROM base AS builder
RUN corepack enable

WORKDIR /app
COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
ARG NEXT_PUBLIC_BASE_PATH
RUN SKIP_ENV_VALIDATION=true npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ARG NEXT_PUBLIC_BASE_PATH
USER nextjs

EXPOSE 3000
ENV NEXT_PUBLIC_BASE_PATH $NEXT_PUBLIC_BASE_PATH
ENV PORT 3000

CMD ["node", "server.js"]
