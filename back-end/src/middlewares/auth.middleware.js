const { verify } = require('../utils/jwt');
const { Unauthorized } = require('../errors');

module.exports = function auth(req, _res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new Unauthorized('Token not found');
  }
  verify(authorization);
  return next();
};
