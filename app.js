const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('colors')
const routes = require('./server/routes/movieRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running port: http://localhost:${PORT}`.green.bold))

