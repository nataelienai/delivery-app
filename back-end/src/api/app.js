const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const controllers = require('../controllers');
const middlewares = require('../middlewares');

app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/login', controllers.login);

app.use(middlewares.error);

module.exports = app;
