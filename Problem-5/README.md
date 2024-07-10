<!-- PROBLEM 5 - A Crude Server -->

# Task

Develop a backend server with ExpressJS. You are required to build a set of CRUD interface that allow a user to interact with the service. You are required to use TypeScript for this task.

1. Interface functionalities:
   1. Create a resource.
   2. List resources with basic filters.
   3. Get details of a resource.
   4. Update resource details.
   5. Delete a resource.
2. You should connect your backend service with a simple database for data persistence.
3. Provide [`README.md`](http://README.md) for the configuration and the way to run application.

# HOW TO RUN

### Method 1 - Running Using Docker

1. Run "docker compose up -d" to setup database and server

### Method 2 - Running Using Nodejs Environment

1. Run "docker compose up -d --build posgresql" to setup database ( postgresql )
2. Change POSTGRES_HOST From "postgres99tech" to "127.0.0.1" (.env)

## OUT PUT

1. Server Running in port http://127.0.0.1:3000/
2. Swagger Running in port http://127.0.0.1:3000/api-docs/

## Summary

1. Offer using NestJS than ExpressJS ( My Opinion )
