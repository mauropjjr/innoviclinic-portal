# Usa a imagem oficial do Node.js como base
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Gera o build da aplicação Next.js
RUN npm run build

# Usa uma imagem leve para servir a aplicação
FROM node:20-alpine AS runner

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos necessários para rodar a aplicação
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expõe a porta 3000 (porta padrão do Next.js)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]