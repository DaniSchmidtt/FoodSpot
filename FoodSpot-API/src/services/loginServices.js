const { loginmodel: loginmodel } = require('../repository/index')
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

module.exports = { createLogin,getLogins}