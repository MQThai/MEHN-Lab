const mongoose = require('../db/connection')

const LinksSchema = new mongoose.Schema({
  url: String,
  title: String,
  description: String,
  postDate: Number
})

const Links = mongoose.model('Links', LinksSchema)

module.exports = Links
