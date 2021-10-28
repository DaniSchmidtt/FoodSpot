const { Router } = require('express')
const app = Router()
const dotenv = require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const loginservice = require('../services/loginServices')

app.post('/', async (req, res) => {
  await loginservice.createLogin(req.body, res)
});
app.post('/auth', async (req, res) => {
  let login = await loginservice.getLogins(req.body.login)
  if (login != null && login.senha === req.body.senha) {

    const id = login._id;
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300
    });
    return res.json({ auth: true, token: token });
  }
  res.status(500).json({ message: 'Login inválido!' });
});
app.post('/restaurante', async (req, res) => {
  await loginservice.createLoginRestaurante(req.body, res)
});
app.post('/authRestaurante', async (req, res) => {
  let login = await loginservice.getLoginRestaurante(req.body.login)
  if (login != null && login.senha === req.body.senha) {

    const id = login._id;
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300
    });
    return res.json({ auth: true, token: token });
  }
  res.status(500).json({ message: 'Login inválido!' });
}); app.post('/adm', async (req, res) => {
  await loginservice.createLoginadm(req.body, res)
});
app.post('/authadm', async (req, res) => {
  let login = await loginservice.getLoginsadm(req.body.login)
  if (login != null && login.senha === req.body.senha) {

    const id = login._id;
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300
    });
    return res.json({ auth: true, token: token });
  }
  res.status(500).json({ message: 'Login inválido!' });
});
module.exports = app