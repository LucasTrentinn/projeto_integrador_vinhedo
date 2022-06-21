// /vinhoTipo
const express = require('express')
const router = express.Router()
const VinhoTipo = require('../db/VinhoTipo')

router.get('/', (req, res) => {
    res.send(VinhoTipo.listar())
})

router.post('/', (req, res) => {
    let vinhoTipo = new VinhoTipo().assign(req.body)
    vinhoTipo.salvar()
    res.status(200).send(vinhoTipo)
})

router.get('/:id', (req, res) => {
    res.send(VinhoTipo.consultar(req.params.id))
})

router.put('/:id', (req, res) => {
    let vinhoTipo = VinhoTipo.consultar(req.params.id).assign(req.body)
    vinhoTipo.salvar()
    res.send(vinhoTipo)
})

router.delete('/:id', (req, res) => {
    VinhoTipo.consultar(req.params.id).deletar()
    res.status(200).send('OK')
})

module.exports = router