const express = require('express')
const { Rating } = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await Rating.findAll())
})

router.post('/', async (req, res) => {
  res.status(200).send(await Rating.create(req.body))
})

router.get('/:id', async (req, res) => {
  res.send(await Rating.findByPk(req.params.id))
})

router.put('/:id', async (req, res) => {
  let rating = await Rating.findByPk(req.params.id)
  rating.set(req.body)
  await rating.save()
  res.send(rating)
})

router.delete('/:id', async  (req, res) => {
  (await Rating.findByPk(req.params.id)).destroy()
  res.status(200).send('OK')
})

module.exports = router