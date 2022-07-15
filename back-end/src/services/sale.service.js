const { Sale } = require('../database/models');

module.exports = async function getSaleById(id) {
  return Sale.findOne({
    where: {
      id,
    },
  });
};

module.exports = async function updateSaleStatus(id, status) {
  const SaleStatuses = {
    0: 'Pendente',
    1: 'Preparando',
    2: 'Em Trânsito',
    3: 'Entregue',
  };
  return Sale.update({
    status: SaleStatuses[status],
    }, {
    where: {
      id,
    },
  });
};
