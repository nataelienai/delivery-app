const login = require('./login.controller');
const register = require('./register.controller');
const getAll = require('./product.controller');
const getSaleById = require('./sale.controller');

module.exports = {
  login,
  register,
  getAll,
  getSaleById,
};
