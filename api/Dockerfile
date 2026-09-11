FROM node:20-alpine

WORKDIR /usr/src/app

# Copie des fichiers de dépendances de l'API
COPY package*.json ./

# Installation des dépendances de production uniquement
RUN npm ci --only=production

# Copie du code source de l'API
COPY . .

# Port exposé par défaut
EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "server.js"]
