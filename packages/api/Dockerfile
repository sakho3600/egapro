FROM node:12.16.1-alpine3.11

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn --production --frozen-lockfile --cache-folder /dev/shm/yarn

COPY ./dist /app/dist

USER node

ENV NODE_ENV=production

CMD ["node", "dist/server.js"]
