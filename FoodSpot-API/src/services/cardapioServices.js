const { cardapiomodel } = require('../repository/index')
async function createCardapio(cardapio) {
    if (cardapio._id) {
        delete cardapio._id
    }
    return await cardapiomodel.create(cardapio)
}
async function getCardapios() {
    return await cardapiomodel.find()
}
async function getCardapio(_id) {
    return await cardapiomodel.findOne({_id})
}
async function updateCardapio(cardapio) {
    if (cardapio._id) {
        return await cardapiomodel.updateOne({ _id: cardapio._id }, cardapio)
    }
    else {
        return 'Não é possivel atualizar sem um ID'
    }
}
async function deleteCardapio(_id) {
    return await cardapiomodel.deleteOne({_id})
}
module.exports = {createCardapio,getCardapios,getCardapio,updateCardapio,deleteCardapio} 