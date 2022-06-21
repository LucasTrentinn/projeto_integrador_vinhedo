// /vinho
const express = require('express')
const router = express.Router()
const Vinho = require('../db/Vinho')

router.get('/', (req, res) => {
    res.send(Vinho.listar())
})

router.post('/', (req, res) => {
    let vinho = new Vinho().assign(req.body)
    vinho.salvar()
    res.status(200).send(vinho)
})

router.get('/:id', (req, res) => {
    res.send(Vinho.consultar(req.params.id))
})

router.put('/:id', (req, res) => {
    let vinho = Vinho.consultar(req.params.id).assign(req.body)
    vinho.salvar()
    res.send(vinho)
})

router.delete('/:id', (req, res) => {
    Vinho.consultar(req.params.id).deletar()
    res.status(200).send('OK')
})

module.exports = router