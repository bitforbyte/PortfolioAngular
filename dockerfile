# Phase 1: Node and Angular

FROM node:16.5-alpine3.12 as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

COPY . .

EXPOSE 4200 49153

CMD ["npm", "start"]
