// /endereco
const express = require('express')
const router = express.Router()
const Endereco = require('../db/Endereco')

router.get('/', (req, res) => {
    res.send(Endereco.listar())
})

router.post('/', (req, res) => {
    let endereco = new Endereco().assign(req.body)
    endereco.salvar()
    res.status(200).send(endereco)
})

router.get('/:id', (req, res) => {
    res.send(Endereco.consultar(req.params.id))
})

router.put('/:id', (req, res) => {
    let endereco = Endereco.consultar(req.params.id).assign(req.body)
    endereco.salvar()
    res.send(endereco)
})

router.delete('/:id', (req, res) => {
    Endereco.consultar(req.params.id).deletar()
    res.status(200).send('OK')
})

module.exports = router