FROM node 

WORKDIR /usr/src

COPY . .

EXPOSE 6000

RUN npm i 

RUN npm run build

CMD ["npm", "run", "start"]