const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')
const methodOverride = require('method-override')

const app = express()

app.use('/assets', express.static('public'))
app.use(methodOverride('_method'))
app.use(parser.urlencoded({extended: true}))

const linksController = require('./controllers/links')

app.set('view engine', 'hbs')
app.get('/', (req, res) => {
  res.redirect('/links')
})
app.use('/links', linksController)

app.listen(3000, () => console.log('Running on port 3000!'))
