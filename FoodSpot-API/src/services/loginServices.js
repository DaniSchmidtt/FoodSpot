const { loginmodel: loginmodel } = require('../repository/index')
async function createLogin(clogin) {
    let login = clogin.login
    let existe = await loginmodel.findOne({login})
    if (clogin._id) {
        delete clogin._id
    }
    if (existe !== null){
        return 'Não é possivel atualizar sem um ID'
    }
    return await loginmodel.create(clogin)
}

async function getLogins(login) {
    return await loginmodel.findOne({ login })
}

module.exports = { createLogin,getLogins}