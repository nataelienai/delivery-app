const { Product } = require('../database/models');

module.exports = async function getAll() {
  return Product.findAll();
}
