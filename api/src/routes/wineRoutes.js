// /wines
const express = require('express')
const { Wine, Rating } = require('../models')
const router =  express.Router()

router.get('/', async (req, res) => {
  res.send(await Wine.findAll({include: Rating}))
})

router.post('/', async (req, res) => {
  res.status(200).send(await Wine.create(req.body))
})

router.get('/:id', async (req, res) => {
  res.send(await Wine.findByPk(req.params.id))
})

router.put('/:id', async (req, res) => {
  let wine =  await Wine.findByPk(req.params.id, {include: Rating})
  wine.set(req.body)
  await wine.save()
  res.send(wine)
})

router.delete('/:id', async (req, res) => {
  (await Wine.findByPk(req.params.id, {include: Rating})).destroy()
  res.status(200).send('OK')
})

module.exports = router