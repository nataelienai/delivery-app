const login = require('./login.controller');
const register = require('./register.controller');
const product = require('./product.controller');
const sale = require('./sale.controller');
const user = require('./user.controller');

module.exports = {
  login,
  ...register,
  ...product,
  ...sale,
  ...user,
};
