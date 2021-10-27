const { cardapiomodel } = require('../repository/index')
async function createCardapio(cardapio) {
    if (cardapio._id) {
        delete cardapio._id
    }
    if (!cardapio.id_restaurante) {
        return 'Não é possivel criar sem um restaurante vinculado'
    }
    if (!cardapio.prato) {
        return 'Não é possivel criar sem um prato'
    }
    if (!cardapio.ingredientes) {
        return 'Não é possivel criar sem ingredientes'
    }
    if (!cardapio.categoria) {
        return 'Não é possivel criar sem uma categoria'
    }
    if (!cardapio.alergenicos) {
        return 'Não é possivel criar sem detalhes de alergenicos'
    }
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
    if (cardapio._id) {
        return await cardapiomodel.updateOne({ _id: cardapio._id }, cardapio)
    }
    else {
        return 'Não é possivel atualizar sem um ID'
    }
}
async function deleteCardapio(_id) {
    //fazer validações quando retornar nulo mandar mensagem de erro
    return await cardapiomodel.deleteOne({_id})
}
module.exports = {createCardapio,getCardapios,getCardapio,updateCardapio,deleteCardapio} 