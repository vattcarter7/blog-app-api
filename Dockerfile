FROM node:21-alpine

WORKDIR /app

COPY package.json /tmp/package.json
COPY package-lock.json /tmp/package-lock.json

RUN cd /tmp && npm install

COPY ./ ./

RUN cp -a /tmp/node_modules ./

RUN npm run-script build

CMD ["node", "build/src/app.js"]