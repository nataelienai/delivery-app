const login = require('./login.service');
const register = require('./register.service');
const product = require('./product.service');
const sale = require('./sale.service');
const user = require('./user.service');

module.exports = {
  login,
  ...register,
  ...product,
  ...sale,
  ...user,
};
