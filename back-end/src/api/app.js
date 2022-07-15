const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const controllers = require('../controllers');
const middlewares = require('../middlewares');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/login', controllers.login);
app.post('/register', controllers.register);
app.get('/products', controllers.getAll);
app.post('/sales'); // cria um novo pedido
app.get('/sales/:user'); // encontra a lista de pedidos de um usuário
app.get('/sales/:id', controllers.getSaleById);
app.put('/sales/:id/:status', controllers.updateSaleStatus);

app.use(middlewares.error);

module.exports = app;
