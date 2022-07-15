const login = require('./login.service');
const register = require('./register.service');
const getAll = require('./product.service');
const getSaleById = require('./sale.service');

module.exports = {
  login,
  register,
  getAll,
  getSaleById,
};
