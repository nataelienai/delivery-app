const { Product } = require('../database/models');

module.exports = {
  async getAllProducts() {
    return Product.findAll();
  }
};
