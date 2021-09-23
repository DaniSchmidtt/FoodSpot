const mongoose = require("mongoose")

mongoose.connect("mongodb://foodspot:ppKoCn4ZdpLOT3S1hNUyJsmexQ2FAv8a33lMQ0nWqP2CKDNjPfNWP5NegRyswm2sZeN0Cwe5eHcmVPsvBUYqAw==@foodspot.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@foodspot@")

module.exports = {
    restaurantemodel: require('./models/restaurante')
}

module.exports = {
    cardapiomodel: require('./models/cardapio')
}