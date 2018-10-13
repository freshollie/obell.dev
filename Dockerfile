FROM node:10
WORKDIR /ollie.codes/

COPY package-lock.json package.json ./
RUN npm install --production

COPY server.js .
COPY src src

ENTRYPOINT [ "node", "/ollie.codes/server.js" ]
