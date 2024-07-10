const appModule = require('./app.module')
const express = require('express')
const { specs, swaggerUi } = require('./config/swagger')

async function bootstrap() {
    const app = express()
    app.use(express.json())

    // Initialize Swagger UI
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
    appModule(app)
    app.listen(3000)
}
bootstrap()