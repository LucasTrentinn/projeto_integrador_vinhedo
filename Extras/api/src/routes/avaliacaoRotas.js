// /avaliacao
const express = require('express')
const router = express.Router()
const Avaliacao = require('../db/Avaliacao')

router.get('/', (req, res) => {
    res.send(Avaliacao.listar())
})

router.post('/', (req, res) => {
    let avaliacao = new Avaliacao().assign(req.body)
    avaliacao.salvar()
    res.status(200).send(avaliacao)
})

router.get('/:id', (req, res) => {
    res.send(Avaliacao.consultar(req.params.id))
})

router.put('/:id', (req, res) => {
    let avaliacao = Avaliacao.consultar(req.params.id).assign(req.body)
    avaliacao.salvar()
    res.send(avaliacao)
})

router.delete('/:id', (req, res) => {
    Avaliacao.consultar(req.params.id).deletar()
    res.status(200).send('OK')
})

module.exports = router