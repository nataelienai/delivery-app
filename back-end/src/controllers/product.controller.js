const services = require('../services');

module.exports = {
  async getAllProducts(_req, res, next) {
    try {
      const products = await services.getAllProducts();
      return res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  },
};
