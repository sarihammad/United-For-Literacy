FROM node:16
WORKDIR /app
COPY . /app/
RUN npm i -g pnpm 
RUN pnpm i
RUN pnpm run build
EXPOSE 3000
ENV NUXT PORT=3000
CMD ["pnpm", "run", "preview"]