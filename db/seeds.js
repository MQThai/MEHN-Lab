const Links = require('../models/links')

const seedData = require('./seeds.json')
seedData.forEach((seed) => {
  seed.postDate = new Date()
})

Links.remove({})
  .then(() => {
    return Links.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
