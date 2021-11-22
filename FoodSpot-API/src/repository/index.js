const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sa:toledo@foodspotdb.ie1um.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-qt2z0m-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true")

module.exports = {
    restaurantemodel: require('./models/restaurante'),
    cardapiomodel: require('./models/cardapio'),
    loginmodel: require('./models/login'),
    loginadmmodel: require('./models/loginadm'),
    loginRestaurantemodel: require('./models/loginRestaurante')
}
