FROM node:20-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
COPY vite.config.ts ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer puerto
EXPOSE 5173

# Comando por defecto (puede ser sobrescrito en docker-compose)
CMD ["npm", "run", "dev", "--", "--host"]

