const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const controllers = require('../controllers');
const middlewares = require('../middlewares');

app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/login', controllers.login);
app.post('/register', controllers.register);
app.get('/products', controllers.getAll);
app.post('/sales', controllers.sale);
app.get('/sales/:user'); // encontra a lista de pedidos de um usuário
app.get('/sales/:id'); // encontra um pedido pela id
app.put('/sales/:id/:status'); // muda o status de um pedido

app.use(middlewares.error);

module.exports = app;
