FROM node:16.14-slim

WORKDIR /frontend

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 1234

CMD [ "npx", "parcel", "serve", "src/index.html" ]
