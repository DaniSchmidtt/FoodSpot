const { cardapiotemodel } = require('../repository/index')
async function createCardapio(cardapio) {
    //fazer validações
    delete cardapio._id
    return await cardapiomodel.create(cardapio)
}
async function getCardapios() {
    //fazer validações
    return await cardapiomodel.find()
}
async function getCardapio(_id) {
    //fazer validações
    return await cardapiomodel.findOne({_id})
}
async function updateCardapio(cardapio) {
    //fazer validações verificar se esta vindo o id
    return await cardapiomodel.updateOne({_id:cardapio._id},cardapio)
}
async function deleteCardapio(_id) {
    //fazer validações quando retornar nulo mandar mensagem de erro
    return await cardapiomodel.deleteOne({_id})
}
module.exports = {createCardapio,getCardapios,getCardapio,updateCardapio,deleteCardapio} 