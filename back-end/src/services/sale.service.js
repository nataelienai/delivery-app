const { Sale } = require('../database/models');

module.exports = async function SaleService (sale) {
    
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber} =  sale ;
    newSale = await Sale.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate: new Date(),
      status: 'Pendente'
    });

    return newSale;
}