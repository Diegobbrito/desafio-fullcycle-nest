# Use Node.js 14 LTS as base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy source code to the working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the Nest.js application
CMD ["npm", "run", "start:dev"]
