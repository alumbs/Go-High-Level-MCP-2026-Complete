# Use Node.js 18 LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Force NODE_ENV=development during build so npm ci installs ALL
# dependencies (including devDependencies like typescript).
# Coolify/CI platforms may inject NODE_ENV at build time, which
# causes npm ci to skip devDependencies and breaks the tsc build.
ENV NODE_ENV=development

# Copy package files
COPY package*.json ./

# Install all dependencies (dev + prod)
RUN npm ci

# Copy source code
COPY . .

# Build the dynamic UI (optional — don't let it block the main server build)
RUN npm run build:dynamic-ui || echo "Warning: dynamic UI build failed (non-fatal)"

# Build the main server (TypeScript → dist/)
# Use set -e so a tsc failure stops the build instead of silently continuing
RUN set -e && npx tsc && ls -la dist/main.js

# Switch to production for runtime
ENV NODE_ENV=production

# Expose the port
EXPOSE 8000

# Start the HTTP server
CMD ["npm", "start"]
