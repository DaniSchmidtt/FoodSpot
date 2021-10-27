const {Router} = require('express')
const app = Router()

const cardapioservice = require('../services/cardapioServices')

app.get('/', async (req, res) => {
    let cardapios = await cardapioservice.getCardapios()
    res.json(cardapios);
});
app.get('/:id', async (req, res) => {
    let cardapios = await cardapioservice.getCardapio(req.params.id)
    res.json(cardapios);
});

app.post('/', async (req, res) => {
    let cardapios = await cardapioservice.createCardapio(req.body)
    res.json(cardapios)
});

app.put('/', async (req, res) => {
    let cardapios = await cardapioservice.updateCardapio(req.body)
    res.json(cardapios)
});

app.delete('/:id', async (req, res) => {
    let cardapios = await cardapioservice.deleteCardapio(req.params.id)
    res.json(cardapios);
});

module.exports = app