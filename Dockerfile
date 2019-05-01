FROM node:11-alpine
WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npm i -g gatsby
RUN gatsby telemetry --disable
RUN gatsby build

EXPOSE 8081
CMD ["gatsby", "serve", "-H", "0.0.0.0", "-p", "8081"]

#docker build -t kohlicekjan/blog .
#docker run -it --rm -p 8082:8081 kohlicekjan/blog:latest