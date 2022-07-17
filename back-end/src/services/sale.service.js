const sequelize = require('sequelize');
const { Sale, User, Product } = require('../database/models');

module.exports = {
  async getSaleById(id) {
    return Sale.findOne({
      where: { id },
      include: [
        { model: User, as: 'seller', attributes: ['name'] },
        {
          model: Product,
          as: 'products',
          attributes: ['id', 'name', 'price', [
            sequelize.literal('`products->SaleProduct`.quantity'),
            'quantity',
          ]],
          through: { attributes: [] },
        },
      ],
      attributes: { exclude: ['userId', 'sellerId', 'deliveryAddress', 'deliveryNumber'] },
    });
  },

  async updateSaleStatus(id, status) {
    const SaleStatuses = {
      0: 'Pendente',
      1: 'Preparando',
      2: 'Em Trânsito',
      3: 'Entregue',
    };
    await Sale.update({ status: SaleStatuses[status] }, { where: { id } });
  },
};
