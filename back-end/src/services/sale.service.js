const { Sale } = require('../database/models');

module.exports = {
  async getByUserId(userId) {
    return Sale.findAll({
      where: { userId },
      attributes: {
        exclude: ['userId', 'sellerId', 'deliveryAddress', 'deliveryNumber'],
      },
    });
  },
};
