FROM node:10
WORKDIR /ollie.codes/

COPY package-lock.json package.json ./
RUN npm install --production

ENTRYPOINT [ "node", "/ollie.codes/server.js" ]
