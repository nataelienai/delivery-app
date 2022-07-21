const services = require('../services');

module.exports = {
  async getSellers(_req, res, next) {
    try {
      const sellers = await services.getSellers();
      return res.status(200).json(sellers);
    } catch (error) {
      next(error);
    }
  },

  async getUsers(_req, res, next) {
    try {
      const users = await services.getUsers();
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },
};
