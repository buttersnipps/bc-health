FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY server/package*.json .

RUN npm install

COPY server .

EXPOSE 3000

CMD ["npm","start"]