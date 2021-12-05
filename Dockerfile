FROM node:alpine


WORKDIR /app

COPY package*.json ./

USER node

RUN npm install react@16.13.1

COPY . .

EXPOSE 3000

CMD ["npm","start"]