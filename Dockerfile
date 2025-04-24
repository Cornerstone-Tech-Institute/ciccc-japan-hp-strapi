FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and lock
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build Strapi admin UI
RUN npm run build

# Expose port
EXPOSE 1337

# Start app
CMD ["npm", "run", "start"]
