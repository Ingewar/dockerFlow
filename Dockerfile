FROM node:14.8.0

COPY package*.json ./
RUN npm ci
COPY . . 
RUN ls
RUN ls src
RUN pwd

CMD [ "node", "src/index.js" ]