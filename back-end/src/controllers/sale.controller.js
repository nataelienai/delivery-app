const services = require('../services');

module.exports = {
  async createSale(req, res, next) {
    try {
      const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = req.body;
      const newSale = await services
        .createSale({ userId, sellerId, totalPrice, deliveryAddress, products, deliveryNumber });
      return res.status(201).json(newSale);
    } catch (error) {
       next(error);
    }
  },
   
  async getSalesByUserId(req, res, next) {
    try {
      const sales = await services.getSalesByUserId(req.params.userId);
      return res.status(200).json(sales);
    } catch (error) {
      next(error);
    }
  },

  async getSalesBySellerId(req, res, next) {
    try {
      const sales = await services.getSalesBySellerId(req.params.sellerId);
      return res.status(200).json(sales);
    } catch (error) {
      next(error);
    }
  },

  async getSaleById(req, res, next) {
    try {
      const { id } = req.params;
      const sale = await services.getSaleById(id);
      return res.status(200).json(sale);
    } catch (error) {
      next(error);
    }
  },

  async updateSaleStatus(req, res, next) {
    try {
      const { id, status } = req.params;
      await services.updateSaleStatus(id, status);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  },
};
