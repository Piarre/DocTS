# ! Build the image as : didockerize
FROM node:latest
WORKDIR /app
COPY . /app
RUN npm i discord.js@12.5.3
CMD ["node", "index.js"]