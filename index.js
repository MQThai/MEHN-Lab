const express = require('express')
const hbs = require('hbs')

const app = express()

const linksController = require('./controllers/linksController')

app.set('view engine', 'hbs')

app.use('/', linksController)

app.listen(3000, () => console.log('Running on port 3000!'))
