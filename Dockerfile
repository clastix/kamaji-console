ARG NEXT_PUBLIC_BASE_PATH=/ui

FROM node:18.18.2-alpine3.18 AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
WORKDIR /app
COPY package.json package-lock.json ./
# Add dependencies for native modules (like bufferutil) that rely on node-gyp
RUN apk add --no-cache python3 make g++
RUN npm ci 

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG NEXT_PUBLIC_BASE_PATH
RUN SKIP_ENV_VALIDATION=true npm run build

# kubectl image, multi-arch
FROM clastix/kubectl:v1.30 AS kubectl

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# kubectl dependency required for the terminal component
COPY --from=kubectl /usr/local/bin/kubectl /usr/local/bin/kubectl
# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ARG NEXT_PUBLIC_BASE_PATH
USER nextjs

EXPOSE 3000
ENV NEXT_PUBLIC_BASE_PATH=$NEXT_PUBLIC_BASE_PATH
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
