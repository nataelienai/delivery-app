const crypto = require('crypto');
const jwt = require('../utils/jwt');
const { User } = require('../database/models');
const { UserAlreadyExists } = require('../errors');

module.exports = {
  async register({ name, email, password }) {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      throw new UserAlreadyExists('User already exists');
    }

    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

    const { id } = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'customer',
    });

    const token = jwt.create(email);

    return { id, name, email, role: 'customer', token };
  },

  async registerByAdmin({ name, email, password, role }) {
    const user = await User.findOne({
      where: {
        [Op.or]: [{ name }, { email }]
      },
    });

    if (user) {
      throw new UserAlreadyExists('User already exists');
    }

    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

    const { id } = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return { id, name, email, role };
  },
};
