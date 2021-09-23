const { restaurantemodel } = require('../repository/index')
async function createRestaurante(restaurante) {
    //fazer validações
    delete restaurante._id
    return await restaurantemodel.create(restaurante)
}
async function getRestaurantes() {
    //fazer validações
    return await restaurantemodel.find()
}
async function getRestaurante(_id) {
    //fazer validações
    return await restaurantemodel.findOne({_id})
}
async function updateRestaurante(restaurante) {
    //fazer validações verificar se esta vindo o id
    return await restaurantemodel.updateOne({_id:restaurante._id},restaurante)
}
async function deleteRestaurante(_id) {
    //fazer validações quando retornar nulo mandar mensagem de erro
    return await restaurantemodel.deleteOne({_id})
}
module.exports = {createRestaurante,getRestaurante,getRestaurantes,updateRestaurante,deleteRestaurante} 