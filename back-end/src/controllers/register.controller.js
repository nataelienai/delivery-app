const services = require('../services');

module.exports = {
  async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const user = await services.register({ name, email, password });
      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },

  async registerByAdmin(req, res, next) {
    try {
      const { name, email, password, role } = req.body;
      const user = await services.registerByAdmin({ name, email, password, role });
      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },
};
