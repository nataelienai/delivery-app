const express = require('express');
const cors = require('cors');

const app = express();

const controllers = require('../controllers');
const middlewares = require('../middlewares');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/login', controllers.login);
app.post('/register', controllers.register);
app.get('/products', controllers.getAllProducts);
app.post('/sales', middlewares.auth, controllers.createSale);
app.get('/sales/user/:userId', controllers.getSalesByUserId);
app.get('/sales/seller/:sellerId', controllers.getSalesBySellerId);
app.get('/sales/:id', controllers.getSaleById);
app.patch('/sales/:id/:status', middlewares.auth, controllers.updateSaleStatus);
app.get('/users', controllers.getUsers);
app.get('/users/sellers', controllers.getSellers);
app.post('/users', middlewares.authAdmin, controllers.registerByAdmin);
app.delete('/user/:id', middlewares.authAdmin, controllers.deleteUserById);

app.use(middlewares.error);

module.exports = app;
