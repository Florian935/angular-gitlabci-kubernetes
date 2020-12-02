# stage 1: build application
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run buildProds

# stage 2: copy builded application into nginx container
FROM nginx:latest

COPY --from=node /app/dist/angular-dockerization /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
