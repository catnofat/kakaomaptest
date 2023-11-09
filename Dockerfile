# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16 AS build
ENV VITE_KAKAOMAP_API_KEY=091e22d31ad42a68fb9223a7aced30d4
WORKDIR /usr/src/app
COPY /package*.json ./
RUN npm ci
COPY / ./
RUN npm run build

# Run stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]