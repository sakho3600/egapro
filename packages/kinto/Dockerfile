FROM node:12.16.1-alpine3.11

WORKDIR /app

ENV KINTO_SERVER=kinto-server
ENV KINTO_ADMIN_LOGIN=admin
ENV KINTO_ADMIN_PASSWORD=passw0rd

COPY package.json yarn.lock /app/

RUN yarn --production --frozen-lockfile --cache-folder /dev/shm/yarn

COPY ./src /app/src
COPY ./scripts /app/scripts

USER node

ENV NODE_ENV=production

ENTRYPOINT ["/app/scripts/entrypoint.sh"]
