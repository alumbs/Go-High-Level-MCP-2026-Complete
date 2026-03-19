# Use Node.js 18 LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the dynamic UI (optional — don't let it block the main server build)
RUN npm run build:dynamic-ui || echo "Warning: dynamic UI build failed (non-fatal)"

# Build the main server (TypeScript → dist/)
RUN npx tsc

# Expose the port
EXPOSE 8000

# Set environment to production
ENV NODE_ENV=production

# Start the HTTP server
CMD ["npm", "start"]
