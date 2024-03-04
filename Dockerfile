FROM node:21-alpine

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json

RUN cd /tmp && npm install

ADD ./ /src

RUN cp -a /tmp/node_modules /src/

WORKDIR /app

RUN npm run-script build

CMD ["node", "build/src/app.js"]