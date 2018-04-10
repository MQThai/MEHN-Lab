const express = require('express')
const morgan = require('morgan')
const hbs = require('hbs')
const session = require('express-session')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const passport = require('passport')
const passportConfig = require('./config/passport')

const app = express()
const fixDate = require('handlebars-intl')
fixDate.registerWith(hbs)

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser())
app.use(session({secret: 'LinkHub'}))
app.use(flash())

passportConfig(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use('/assets', express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended: true}))

const usersController = require('./controllers/users')
const linksController = require('./controllers/links')

app.set('view engine', 'hbs')
app.get('/', (req, res) => {
  res.redirect('/links')
})

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use('/', usersController)
app.use('/links', linksController)

app.listen(3000, () => console.log('Running on port 3000!'))
