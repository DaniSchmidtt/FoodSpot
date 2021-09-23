const mongoose = require("mongoose")

let cardapioschema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    id_restaurante: {
        type: String,
        required: true
    },
    prato: {
        type: String,
        required: true
    },
    ingredientes: {
        type: String,
        required: true
    },
    categoria: {
    type: String,
    required: true
    },
    alergenicos: {
        type: String,
        required: true
    }    
})
let schema = mongoose.model('cardapios', cardapioschema, 'cardapios')
module.exports = schema