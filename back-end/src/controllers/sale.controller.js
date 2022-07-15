const { sale } = require("../services");

module.exports = {
  async getByUserId(req, res, next) {
    try {
      const sales = await sale.getByUserId(req.params.userId);
      return res.status(200).json(sales);
    } catch (error) {
      next(error);
    }
  },
};
