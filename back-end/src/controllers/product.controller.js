const services = require('../services');

module.exports = async function getAll(_req, res, next) {
  try {
    const products = await services.getAll();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
