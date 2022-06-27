// Declarações
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('sequelize');
const PORT = process.env.PORT || 3001

// Rotas
const user = require('./routes/userRoutes')
const {sequelize} = require('./models')

// App
const app = express()
app.use(bodyParser.json())
app.use(cors())

// Métodos
app.get('', (req, res) => [
  res.send('Vinhedo - Banco de Dados')
])

app.use('/user', user)

sequelize.sync({logging: true}).then((value) => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  })
})