const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/newslinks')

mongoose.Promise = Promise

module.exports = mongoose
