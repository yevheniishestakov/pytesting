FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install jest --save-dev
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]