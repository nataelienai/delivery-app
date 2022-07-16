const services = require('../services');

module.exports = {
  async getSaleById(req, res, next) {
    try {
      const { id } = req.params;
      const sale = await services.getSaleById(id);
      return res.status(200).json(sale);
    } catch (error) {
      next(error);
    }
  },
};
