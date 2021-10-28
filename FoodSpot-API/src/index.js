const dotenv = require("dotenv-safe").config();
const express = require('express')
const restauranterouter = require('./routes/restaurante')
const cardapiorouter = require('./routes/cardapio')
const loginrouter = require('./routes/login')
const app = express()
const jwt = require('jsonwebtoken');
app.use(express.json())

app.use('/restaurante',restauranterouter)
app.use('/cardapio',cardapiorouter)
app.use('/login',loginrouter)

const port = process.env.port || 1337

app.listen(port, function () {
    console.log('run in port ' + port)

})

//authentication
app.post('/teste', (req, res, next) => {
    //esse teste abaixo deve ser feito no seu banco de dados
    if(req.body.user === 'luiz' && req.body.password === '123'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    
    res.status(500).json({message: 'Login inválido!'});
})