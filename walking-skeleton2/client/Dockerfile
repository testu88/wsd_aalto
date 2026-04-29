# IF MISSING DENO FILE ERROR, DELETE CLIENT NODE_MODULES AND DOCKER COMPOSE UP --BUILD

FROM denoland/deno:alpine-2.4.3

WORKDIR /app

COPY package.json .

RUN DENO_FUTURE=1 deno install

COPY . .

CMD ["run", "dev", "--host"]


