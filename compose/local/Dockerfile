FROM node:25.9.0-alpine3.22@sha256:d4f742bdaee57b81d8b1a1c78e210e5c3c2b3892b335a30575956819028c804e

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
