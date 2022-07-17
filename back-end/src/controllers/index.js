const login = require('./login.controller');
const register = require('./register.controller');
const product = require('./product.controller');
const sale = require('./sale.controller');

module.exports = {
  login,
  register,
  ...product,
  ...sale,
};
