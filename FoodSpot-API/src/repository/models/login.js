const mongoose = require("mongoose")
let loginschema = new mongoose.Schema({
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
let schema = mongoose.model('login', loginschema, 'login')
module.exports = schema