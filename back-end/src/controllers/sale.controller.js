const services = require('../services');

module.exports = async function getSaleById(req, res, next) {
  try {
    const { id } = req.params;
    const user = await services.getSaleById(id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = async function updateSaleStatus(req, res, next) {
  try {
    const { id, status } = req.params;
    const user = await services.updateSaleStatus(id, status);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
