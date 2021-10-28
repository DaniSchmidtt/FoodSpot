const mongoose = require("mongoose")
let loginRestauranteschema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    }   
})
let schema = mongoose.model('loginRestaurante', loginRestauranteschema, 'loginRestaurante')
module.exports = schema