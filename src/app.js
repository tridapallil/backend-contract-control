const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const { sequelize } = require('./model')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../docs/swagger.json')

app.use(bodyParser.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.set('sequelize', sequelize)
app.set('models', sequelize.models)
app.use(routes)

module.exports = app
