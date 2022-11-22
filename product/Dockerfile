FROM node
WORKDIR /app
EXPOSE 3000
COPY package.json package-lock.json ./
COPY . .
RUN npm install
ENTRYPOINT npm start
