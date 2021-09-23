const express = require('express')
const restauranterouter = require('./routes/restaurante')
const cardapiorouter = require('./routes/cardapio')
const app = express()
app.use(express.json())

app.use('/restaurante',restauranterouter)
app.use('/cardapio',cardapiorouter)

const port = process.env.port || 1337

app.listen(port, function () {
    console.log('run in port ' + port)

})
