const { User } = require('../database/models');

module.exports = {
  async getSellers() {
    return User.findAll({
      where: {
        role: 'seller', 
      },
      attributes: {
        exclude: ['password', 'role', 'email'],
      },
    });
  },
};
