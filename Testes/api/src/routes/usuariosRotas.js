// /usuario
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const auth = require('../auth')

const Usuario = require('../db/Usuario')

router.get('/', (req, res) => {
    res.send(Usuario.listar())
})

router.post('/', (req, res) => {
    let usuario = new Usuario().assign(req.body)
    usuario.salvar()
    res.status(200).send(usuario)
})

router.get('/:id', (req, res) => {
    res.send(Usuario.consultar(req.params.id))
})

router.put('/:id', (req, res) => {
    let usuario = Usuario.consultar(req.params.id).assign(req.body)
    usuario.salvar()
    res.send(usuario)
})

router.delete('/:id', (req, res) => {
    Usuario.consultar(req.params.id).deletar()
    res.status(200).send('OK')
})

router.post('/login', (req, res) => {
    const { email, senha } = req.body

    const usuario = Usuario.consultarEmailSenha(email, senha)

    if(usuario == null) {
        res.status(401).send('Usuário ou senha inválidos.')
    } else {
        const token = jwt.sign({usuario_id: usuario.id}, 'chavesecreta')
        res.send({usuario, token})
    }
})

module.exports = router