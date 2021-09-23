const { restaurantemodel } = require('../repository/index')
async function createRestaurante(restaurante) {
    //fazer validações
    if (restaurante._id) {
        delete restaurante._id
    }
    if (!restaurante.nome) {
        return 'Não é possivel criar sem um nome'
    }
    if (!restaurante.descricao) {
        return 'Não é possivel criar sem uma descrição'
    }
    if (!restaurante.categoria) {
        return 'Não é possivel criar sem uma categoria'
    }
    if (!restaurante.local) {
        return 'Não é possivel criar sem um local'
    }
    return await restaurantemodel.create(restaurante)
}
async function getRestaurantes() {
    return await restaurantemodel.find()
}
async function getRestaurante(_id) {
    return await restaurantemodel.findOne({ _id })
}
async function updateRestaurante(restaurante) {
    if (restaurante._id) {
        return await restaurantemodel.updateOne({ _id: restaurante._id }, restaurante)
    }
    else {
        return 'Não é possivel atualizar sem um ID'
    }
}

async function deleteRestaurante(_id) {
    //fazer validações quando retornar nulo mandar mensagem de erro
    return await restaurantemodel.deleteOne({_id})
}
module.exports = { createRestaurante, getRestaurante, getRestaurantes, updateRestaurante, deleteRestaurante }