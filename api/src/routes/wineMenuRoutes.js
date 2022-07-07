// /wineMenu
const express = require('express')
const { WineMenu } = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await WineMenu.findAll())
})

router.post('/', async (req, res) => {
  res.status(200).send(await WineMenu.create(req.body))
})

router.get('/:id', async (req, res) => {
  res.send(await WineMenu.findByPk(req.params.id))
})

router.put('/:id', async (req, res) => {
  let wineMenu = await WineMenu.findByPk(req.params.id)
  wineMenu.set(req.body)
  await wineMenu.save()
  res.send(wineMenu)
})

router.delete('/:id', async (req, res) => {
  (await WineMenu.findByPk(req.params.id)).destroy()
  res.status(200).send('OK')
})

module.exports = router