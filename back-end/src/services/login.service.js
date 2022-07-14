const crypto = require('crypto');
const jwt = require('../utils/jwt');
const { User } = require('../database/models');
const { InvalidPassword, NotFound } = require('../errors');

module.exports = async function login(email, password) {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new NotFound('User not found');
  }

  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

  if (user.password !== hashedPassword) {
    throw new InvalidPassword('Incorrect password');
  }

  delete user.dataValues.password;
  const token = jwt.create(user.email);

  return { user, token };
};
