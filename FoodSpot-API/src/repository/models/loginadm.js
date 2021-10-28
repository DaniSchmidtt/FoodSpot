const mongoose = require("mongoose")
let loginadmschema = new mongoose.Schema({
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
let schema = mongoose.model('loginadm', loginadmschema, 'loginadm')
module.exports = schema