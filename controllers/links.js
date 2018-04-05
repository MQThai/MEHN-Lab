const express = require('express')
const router = express.Router()
const Links = require('../models/links')

router.get('/', (req, res) => {
  Links.find({}).then(links => res.render('index', {links}))
})

router.post('/', (req, res) => {
  Links.create(req.body)
    .then(link => {
      res.redirect('/')
    })
})

router.get('/edit/:id', (req, res) => {
  Links.findOne({_id: req.params.id})
    .then(link => {
      res.render('edit', {link})
    })
})

router.get('/new', (req, res) => {
  res.render('new')
})

router.get('/:id', (req, res) => {
  Links.findOne({_id: req.params.id})
    .then(link => res.render('show', {link}))
})

module.exports = router
