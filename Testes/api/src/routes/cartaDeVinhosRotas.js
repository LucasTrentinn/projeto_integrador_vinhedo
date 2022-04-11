// /cartaDeVinhos
const express = require('express')
const router = express.Router()
const CartaDeVinhos = require('../db/CartaDeVinhos')

router.get('/', (req, res) => {
    res.send(CartaDeVinhos.listar())
})

router.post('/', (req, res) => {
    let cartaDeVinhos = new CartaDeVinhos().assign(req.body)
    cartaDeVinhos.salvar()
    res.status(200).send(cartaDeVinhos)
})

router.get('/:id', (req, res) => {
    res.send(CartaDeVinhos.consultar(req.params.id))
})

router.put('/:id', (req, res) => {
    let cartaDeVinhos = CartaDeVinhos.consultar(req.params.id).assign(req.body)
    cartaDeVinhos.salvar()
    res.send(cartaDeVinhos)
})

router.delete('/:id', (req, res) => {
    CartaDeVinhos.consultar(req.params.id).deletar()
    res.status(200).send('OK')
})

module.exports = router