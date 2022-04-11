// Declarações
const express = require('express')
const bodyParser = require('body-parser')
const { join } = require('path')
const port = 3000
const Modelo = require('./framework/Modelo')


// Rotas
const usuarios = require('./routes/usuariosRotas')
const vinhos = require('./routes/vinhosRotas')
const cartaDeVinhos = require('./routes/cartaDeVinhosRotas')
const avaliacao = require('./routes/avaliacaoRotas')
const vinhoTipos = require('./routes/vinhoTipos') 
const endereco = require('./routes/enderecoRotas') 

Modelo.dir = join(__dirname, '..', 'json')

// App
const app = express()
app.use(bodyParser.json())

// Métodos 
app.get('/', (req, res) => {
    res.send('Vinhedo')
})

app.use('/usuarios', usuarios)
app.use('/vinhos', vinhos)
app.use('/cartaDeVinhos', cartaDeVinhos)
app.use('/avaliacoes', avaliacao)
app.use('/vinhoTipos', vinhoTipos)
app.use('/endereco', endereco)

app.listen(port, () => {
    console.log(`Conectado à porta ${port}.`)
})