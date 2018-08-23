FROM node:latest

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /
ADD . /

EXPOSE 3000

RUN npm install
RUN npm install restify

CMD ["nodemon", "server.js"]