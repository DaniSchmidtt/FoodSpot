const express = require('express')
const restauranterouter = require('./routes/restaurante')
const app = express()
app.use(express.json())

app.use('/restaurante',restauranterouter)

const port = process.env.port || 1337

app.listen(port, function () {
    console.log('run in port ' + port)

})
