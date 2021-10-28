const mongoose = require("mongoose")

mongoose.connect("mongodb://foodspotdb:aUkh2PMb1UdhCAu1WrYIx62WwmfnN3YjPSGAguDZfFdKKuQ6SKLj2ckbNFu5nY6B9qQzgILW0bsxUFLR5pT5lA==@foodspotdb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@foodspotdb@")

module.exports = {
    restaurantemodel: require('./models/restaurante'),
    cardapiomodel: require('./models/cardapio'),
    loginmodel: require('./models/login')
}
