FROM node:20-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY .npmrc ./
RUN chown -R node:node /home/node/app
USER node

RUN npm install
RUN rm -f .npmrc

# If you are building your code for production
# RUN npm ci --only=production
COPY --chown=node:node . .

# Bundle app source
COPY . .

EXPOSE 8082

CMD [ "node", "index.js" ]
