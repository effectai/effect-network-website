# Dockerfile
FROM node:12-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci

# Bundle app source
COPY . .

# Expose port and start app
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
