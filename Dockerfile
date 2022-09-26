FROM node
ENV PORT_SERVER=3030
WORKDIR /usr/app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3030

CMD ["yarn", "dev"]