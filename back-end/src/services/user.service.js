const { Op } = require('sequelize');
const { User } = require('../database/models');
const { NotFound } = require('../errors');

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

  async isAdmin(email) {
    const user = await User.findOne({ where: { email } });
    return user.role === 'administrator';
  },

  async getUsers() {
    return User.findAll({
      where: {
        role: { [Op.not]: 'administrator' },
      },
      attributes: {
        exclude: ['password'],
      },
    });
  },

  async deleteUserById(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new NotFound('User not found');
    }
    await User.destroy({ where: { id } });
  },
};
