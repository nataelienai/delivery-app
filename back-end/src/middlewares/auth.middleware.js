const { verify } = require('../utils/jwt');
const { Unauthorized } = require('../errors');
const services = require('../services');

module.exports = {
  auth(req, _res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Unauthorized('Token not found');
    }
    verify(authorization);
    next();
  },

  async authAdmin(req, res, next) {
    const { authorization } = req.headers;
    try {
      if (!authorization) {
        throw new Unauthorized('Token not found');
      }
      const email = verify(authorization);
      const isAdmin = await services.isAdmin(email);
      if (!isAdmin) {
        throw new Unauthorized('User is not an administrator');
      }
      next();
    } catch (error) {
      next(error);
    }
  },
};
