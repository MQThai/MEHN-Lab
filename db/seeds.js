const Links = require('../models/links')

const seedData = require('./seeds.json')

Links.remove({})
  .then(() => {
    return Links.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
