FROM node:alpine

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install react@16.13.1

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm","start"]