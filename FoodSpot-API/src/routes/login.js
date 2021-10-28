const {Router} = require('express')
const app = Router()
const dotenv = require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const loginservice = require('../services/loginServices')

app.post('/', async (req, res) => {
    let resposta = await loginservice.createLogin(req.body)
    res.json(resposta)
});
app.post('/auth', async (req, res) => {
    let login = await loginservice.getLogins(req.body.login)
    if(login != null && login.senha === req.body.senha){
        
        const id = login._id; 
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300 
        });
        return res.json({ auth: true, token: token });
      }
      res.status(500).json({message: 'Login inválido!'});
});

module.exports = app