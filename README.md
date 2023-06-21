# Next.js jirarm

Para correr localmente, se necesita la base de datos.

```
docker-compose up -d
```

- el -d significa detached, que se corre en segundo plano

MongoDB local corre en el puerto 27017: mongodb://localhost:27017

## Reconstruir los modulos de node

```
yarn
yarn dev
```

## Llenar la base de datos con información de prueba

Llamando a la API

```
http://localhost:3000/api/seed
```

## Renombrar archivo .env.template a .env

Agregar las variables de entorno
