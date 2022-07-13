const express = require('express');

const app = express();

const middlewares = require('../middlewares');

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(middlewares.error);

module.exports = app;
