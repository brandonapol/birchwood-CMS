# Use the official Node.js 16 image as a parent image
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
EXPOSE 5173

CMD ["npm", "run", "preview"]
