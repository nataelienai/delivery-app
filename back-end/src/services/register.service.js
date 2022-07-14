const crypto = require('crypto');
const { User } = require('../database/models');
const { UserAlreadyExists } = require('../errors');

module.exports = async function register(name, email, password) {
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
  });

  return { id, name, email };
};
