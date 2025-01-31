# Use Node.js base image
FROM node:14

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose port 3000 for the development server
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]