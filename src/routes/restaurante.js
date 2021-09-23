const {Router} = require('express')
const app = Router()

const restauranteservice = require('../services/restauranteServices')

app.get('/', async (req, res) => {
    let restaurantes = await restauranteservice.getRestaurantes()
    res.json(restaurantes);
});
app.get('/:id', async (req, res) => {
    let restaurantes = await restauranteservice.getRestaurante(req.params.id)
    res.json(restaurantes);
});

app.post('/', async (req, res) => {
    let resposta = await restauranteservice.createRestaurante(req.body)
    res.json(resposta)
});

app.put('/', async (req, res) => {
    let resposta = await restauranteservice.updateRestaurante(req.body)
    res.json(resposta)
});

app.delete('/:id', async (req, res) => {
    let restaurantes = await restauranteservice.deleteRestaurante(req.params.id)
    res.json(restaurantes);
});

module.exports = app