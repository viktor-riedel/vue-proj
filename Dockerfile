FROM node:lts-alpine

WORKDIR /app

COPY package.json .

COPY . .

VOLUME ["./src:/app/src"]

EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm"]

CMD ["npm", "run", "dev",  "--", "--host", "0.0.0.0"]
