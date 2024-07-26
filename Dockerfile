FROM node:20.13.0-alpine

RUN mkdir /app

WORKDIR /app

COPY . .
RUN rm -rf node_modules package-lock.json
RUN npm install
RUN npm install -g nodemon ts-node ts-node-dev  typescript
RUN npm install ts-node-dev --save-dev

EXPOSE 7000

CMD [ "npm", "run", "dev" ]