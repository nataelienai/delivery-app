const { Sale, SaleProduct } = require('../database/models');

module.exports = async function SaleService(sale) {
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
    SaleProduct.create({
        saleId: newSale.id,
        productId: product.id,
        quantity: product.quantity,
    });
  }));
  return newSale;
};