FROM node:19-alpine3.16
#Establece la imagen base npm=9.6.4 nodejs=19.8.1   alpine3.16 port=5173
# Dirección de trabajo en la imagen
WORKDIR /app
# Copia los archivos del proyecto a la imagen
COPY . .

# Instala las dependencias
RUN apk add --no-cache git
RUN npm install -g npm

# Instala las dependencias de Vue 3 con Vite y Tailwind CSS 3
RUN yarn add vue@latest vite@4.2.1 tailwindcss@3.3.1 postcss@8.4.21 autoprefixer@10.4.14

RUN npm install @tailwindcss/forms
RUN npm run build

# Expone el puerto 5173
EXPOSE 5173

# Inicia la aplicación con Vite
CMD ["yarn", "run", "vite"]





