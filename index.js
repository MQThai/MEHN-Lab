const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')
const methodOverride = require('method-override')

const app = express()

app.use(methodOverride('_method'))
app.use(parser.urlencoded({extended: true}))
const linksController = require('./controllers/links')

app.set('view engine', 'hbs')

app.use('/', linksController)

app.listen(3000, () => console.log('Running on port 3000!'))
