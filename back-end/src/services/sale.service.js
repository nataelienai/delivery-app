const sequelize = require('sequelize');
const { Sale, SaleProduct, User, Product } = require('../database/models');

module.exports = {
  async createSale(sale) {
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = sale;
  
    const newSale = await Sale.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate: new Date(),
      status: 'Pendente',
    });

    await Promise.all(products.map(async (product) => {
      await SaleProduct.create({
        saleId: newSale.id,
        productId: product.id,
        quantity: product.quantity,
      });
    }));
    return newSale;
  },
  
  async getSalesByUserId(userId) {
    return Sale.findAll({
      where: { userId },
      attributes: {
        exclude: ['userId', 'sellerId', 'deliveryAddress', 'deliveryNumber'],
      },
    });
  },

  async getSalesBySellerId(sellerId) {
    return Sale.findAll({
      where: { sellerId },
      attributes: {
        exclude: ['userId', 'sellerId'],
      },
    });
  },

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
