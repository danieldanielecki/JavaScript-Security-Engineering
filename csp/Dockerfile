FROM node:alpine

USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
WORKDIR /home/node

COPY ["package.json", "npm-shrinkwrap.json", "./"]
RUN npm install

# Install only dependencies required for production.
#RUN npm install --only=prod

COPY . .
EXPOSE 4200 49153
CMD ["npm", "run", "start"]

# Bundle for production.
#CMD ["npm", "run", "build"]
