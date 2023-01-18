FROM node:16-alpine3.16

COPY ./ /usr/local/app/

WORKDIR /usr/local/app/

RUN npm install

RUN npm run build

CMD ["npm", "start"]