FROM node:20-buster
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install jest --global
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]