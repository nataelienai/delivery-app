const sequelize = require('sequelize');
const { Sale, User, Product } = require('../database/models');

module.exports = {
  async getByUserId(userId) {
    return Sale.findAll({
      where: { userId },
      include: [
        { model: User, as: 'seller', attributes: { exclude: ['password'] } },
        {
          model: Product,
          as: 'products',
          attributes: ['id', 'name', 'price', 'urlImage', [
            sequelize.literal('`products->SaleProduct`.quantity'),
            'quantity',
          ]],
          through: { attributes: [] },
        },
      ],
      attributes: { exclude: ['userId', 'sellerId'] },
    });
  },
};
