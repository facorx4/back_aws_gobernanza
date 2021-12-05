FROM node:alpine


WORKDIR /app

COPY package*.json ./

USER node


COPY . .

EXPOSE 3000

CMD ["npm","start"]