const { Sale } = require('../database/models');

module.exports = async function getSaleById(id) {
  return Sale.findOne({
    where: {
      id,
    },
  });
};
