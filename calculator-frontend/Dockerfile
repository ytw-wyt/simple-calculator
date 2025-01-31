# Stage 1: Build the React app
FROM node:14 as build

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app for production (this will create a build/ folder)
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

# Copy the build output from Stage 1 to Nginx's default public folder
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 to serve the static files
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

