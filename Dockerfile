FROM oven/bun:latest AS base
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y bash curl && curl -1sLf \
'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.deb.sh' | bash \
&& apt-get update && apt-get install -y infisical

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS build
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run build

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=build /usr/src/app/.output/ .
COPY --from=build /usr/src/app/package.json .
COPY .infisical.json .

RUN chown -R bun .

USER bun
EXPOSE 3000/tcp
ENV INFISICAL_ENV=prod
ENV NUXT_PUBLIC_API_BASE_URL=https://wytness.fr/api/
CMD infisical run --projectId 6c28db9c-c9bd-413d-b76b-2c6245b201e8 --path "/web" --recursive --env $INFISICAL_ENV --token="$INFISICAL_TOKEN" --domain https://secrets.place2die.com -- bun --bun run server/index.mjs
