const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:123@cluster0.rjlba.mongodb.net/test?authSource=admin&replicaSet=atlas-4qm2jf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true")

module.exports = {
    restaurantemodel: require('./models/restaurante'),
    cardapiomodel: require('./models/cardapio'),
    loginmodel: require('./models/login'),
    loginadmmodel: require('./models/loginadm'),
    loginRestaurantemodel: require('./models/loginRestaurante')
}
