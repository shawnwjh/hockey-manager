# Hockey Manager

This project uses the NHL API from `https://api-web.nhle.com/`.

## Development server

To start a local development server, run:

```bash
cd hockey-manager-frontend/hockey-manager
ng serve

cd hockey-manager-backend/hockey-manager
mvn package
cd target
java -jar hockey-manager-0.0.1-SNAPSHOT.jar
```

Navigate to `http://localhost:4200/` to view the frontend page and `http://localhost:8080/swagger-ui/index.html` to look at the routes.