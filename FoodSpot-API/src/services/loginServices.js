const { loginmodel: loginmodel } = require('../repository/index')
const { loginadmmodel: loginadmmodel} = require('../repository/index')
const { loginRestaurantemodel: loginRestaurantemodel} = require('../repository/index')
async function createLogin(clogin,res) {
    let login = clogin.login
    let existe = await loginmodel.findOne({login})
    if (clogin._id) {
        delete clogin._id
    }
    if (existe !== null){
        return await res.status(500).json({message: 'Login inválido!'});
    }
    return await res.json( loginmodel.create(clogin))
}

async function getLogins(login) {
    return await loginmodel.findOne({ login })
}
async function createLoginadm(clogin,res) {
    let login = clogin.login
    let existe = await loginadmmodel.findOne({login})
    if (clogin._id) {
        delete clogin._id
    }
    if (existe !== null){
        return await res.status(500).json({message: 'Login inválido!'});
    }
    return await res.json( loginadmmodel.create(clogin))
}

async function getLoginsadm(login) {
    return await loginadmmodel.findOne({ login })
}
async function createLoginRestaurante(clogin,res) {
    let login = clogin.login
    let existe = await loginRestaurantemodel.findOne({login})
    if (clogin._id) {
        delete clogin._id
    }
    if (existe !== null){
        return await res.status(500).json({message: 'Login inválido!'});
    }
    return await res.json( loginRestaurantemodel.create(clogin))
}

async function getLoginRestaurante(login) {
    return await loginRestaurantemodel.findOne({ login })
}


module.exports = { createLogin,getLogins,createLoginadm,getLoginsadm,createLoginRestaurante,getLoginRestaurante}