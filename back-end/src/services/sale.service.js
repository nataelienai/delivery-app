const { Sale } = require('../database/models');

module.exports = {
  async getSaleById(id) {
    return Sale.findOne({
      where: {
        id,
      },
    });
  }
};
