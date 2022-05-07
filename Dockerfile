FROM node:17-alpine AS react-builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=react-builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]