# syntax=docker/dockerfile:1

ARG PNPM_VERSION=10.30.3

# ─── Stage 1: deps ────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps
ARG PNPM_VERSION
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate
WORKDIR /app
ENV PNPM_CONFIG_MINIMUM_RELEASE_AGE=0

COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile --minimum-release-age=0

# ─── Stage 2: builder ─────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
ARG PNPM_VERSION
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# ─── Stage 3: runner ──────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Archivos estáticos públicos
COPY --from=builder /app/public ./public

# Salida standalone generada por Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
