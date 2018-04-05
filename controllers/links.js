const express = require('express')
const router = express.Router()
const Links = require('../models/links')

router.get('/', (req, res) => {
  Links.find({}).then(links => res.render('index', {links}))
})

router.get('/:id', (req, res) => {
  Links.findOne({_id: req.params.id})
    .then(link => res.render('show', {link}))
})

module.exports = router
