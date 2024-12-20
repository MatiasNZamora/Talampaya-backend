
# Talampaya Ecommerce Backend 🚀

Ecommerce Backend de E-commerce 
Este repositorio contiene el backend de un sistema de e-commerce desarrollado con NestJS. El proyecto incluye funcionalidades esenciales para la gestión de una tienda en línea, como autenticación, pedidos, productos y categorías.

## Características principales 📋
Framework: NestJS
Bases de datos:
Primaria: PostgreSQL con TypeORM
Alternativa: MongoDB, gestionada con MongoCompass
Módulos incluidos:
Autenticación (con manejo de tokens)
Gestión de pedidos
Productos y categorías
Relacionamientos en PostgreSQL y compatibilidad con MongoDB

### Tecnologías utilizadas 🛠️
 - NestJS: Framework para construir aplicaciones de servidor escalables
 - Passport: Middleware de autenticación para Node.js
 - JWT (JSON Web Tokens): Gestión de autenticación basada en tokens
 - TypeORM: ORM para manejar relaciones en PostgreSQL
 - MongoDB: Base de datos alternativa para flexibilidad
 - Swagger: Documentación de la API


## Instalación y configuración 🔧

Clonar el repositorio

```bash
    git clone https://github.com/MatiasNZamora/Talampaya-backend.git
    cd Talampaya-backend
```

### Instalar dependencias

```bash
npm install
Configurar variables de entorno del archivo .env.template
```

### Levantar contenedor de Docker:

```bash
    docker-compose up -d
```

### Ejecutar migraciones (Para PostgreSQL)

```bash
    En el caso de PostgresQl
    npm run typeorm migration:run
    Levantar el servidor
```

### Ejecutar el comando para levantar el projecto en modo Desarrollo:

```bash
    $env:NODE_ENV="dev"; npm run start:dev
```

### Endpoints disponibles 📚

``` La coleccion de enpoints estan disponibles en el repositorio.    ```



### Documentación completa de la API disponible en Swagger al levantar el proyecto.

``` 
http://localhost:4000/documentacion 
``` 
