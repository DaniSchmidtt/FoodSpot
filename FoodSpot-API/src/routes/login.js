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
        //auth ok
        const id = 1; //esse id viria do banco de dados
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300 // expires in 5min
        });
        return res.json({ auth: true, token: token });
      }      
      res.status(500).json({message: 'Login inválido!'});
});

module.exports = app