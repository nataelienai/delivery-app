const { saleService } = require('../services');

module.exports = async function sale(req, res, next ) {
  try {
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = req.body
    const newSale = await saleService({userId, sellerId, totalPrice, deliveryAddress, products, deliveryNumber})
    return res.status(201).json(newSale);
  }catch (error) {
    console.log(error);
    next (error)
  }
}

