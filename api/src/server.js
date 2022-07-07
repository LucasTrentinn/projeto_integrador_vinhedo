// Declarações
const express = require('express');
const bodyParser = require('body-parser');
const {join} = require('path')
const cors = require('cors');
const PORT = process.env.PORT || 3001

// Rotas
const user = require('./routes/userRoutes')
const rating = require('./routes/ratingRoutes')
const wine = require('./routes/wineRoutes')
const wineMenu = require('./routes/wineMenuRoutes')
const {sequelize} = require('./models')

// App
const app = express()
app.use(bodyParser.json())
app.use(cors())

// Métodos
app.get('', (req, res) => [
  res.send('Vinhedo - Banco de Dados')
])

app.use('/users', user)
app.use('/wines', wine)
app.use('/ratings', rating)
app.use('/wineMenus', wineMenu)

sequelize.sync({logging: true}).then((value) => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  })
})