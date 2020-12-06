FROM node:14-alpine as build
WORKDIR /build/

COPY yarn.lock package.json ./
RUN yarn --frozen-lockfile

COPY . .
RUN yarn build

FROM node:10-alpine
WORKDIR /ollie.codes
ENV NODE_ENV=production

COPY yarn.lock package.json ./
RUN yarn --frozen-lockfile

COPY public public
COPY --from=build /build/.next /ollie.codes/.next

ENTRYPOINT [ "yarn", "start" ]
