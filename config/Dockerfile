#FROM node:16-alpine
FROM node:10.19.0

ENV NODE_ENV=development

RUN #apk update && apk upgrade
# RUN mkdir /var/www/front-bhp

# kopiuje kod źródłowy z bieżącego katalogu
COPY . /var/www/front-bhp



EXPOSE 3005
WORKDIR /var/www/front-bhp

RUN npm install
# RUN npm start

#COPY docker-entrypoint /usr/local/bin/

ENTRYPOINT ["npm", "start"]

