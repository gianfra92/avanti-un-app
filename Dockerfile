FROM node:23.11-alpine AS build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build --prod


FROM node:23.11-alpine
RUN addgroup -S servicegroup && adduser -S serviceuser -G servicegroup
USER serviceuser
WORKDIR /usr/app
COPY --from=build /app/src/dist/avanti-un-app/ ./
CMD node server/server.mjs
EXPOSE 4000