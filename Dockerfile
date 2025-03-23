# Use node image to build the app
FROM node:18 AS build

WORKDIR /app
COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build

# Use nginx to serve the built React app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
