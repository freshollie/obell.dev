FROM node:24-alpine
WORKDIR /obell.dev

COPY yarn.lock package.json ./
RUN yarn --frozen-lockfile

COPY static /obell.dev/static

ENTRYPOINT [ "yarn", "start" ]
