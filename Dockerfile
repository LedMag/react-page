FROM node:16-alpine3.16 as build

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/
COPY package.json .

RUN npm config set legacy-peer-deps true
RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine as prod

COPY --from=build /usr/src/app/build/ /usr/share/nginx/html

EXPOSE 80