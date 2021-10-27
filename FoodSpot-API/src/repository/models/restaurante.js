const mongoose = require("mongoose")
let retauranteschema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    categoria: {
    type: String,
    required: true
    },
    local: {
        type: String,
        required: true
    }    
})
let schema = mongoose.model('restaurantes', retauranteschema, 'restaurantes')
module.exports = schema