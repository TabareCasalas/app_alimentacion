FROM node:20-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
COPY tsconfig.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer puerto
EXPOSE 3001

# Comando por defecto (puede ser sobrescrito en docker-compose)
CMD ["npm", "run", "dev"]

