const crypto = require('crypto');
const { User } = require('../database/models');
const errors = require('../errors');

module.exports = async function register(name, email, password) {
  const user = await User.find({
    where: {
      email,
    },
  });

  if (user) {
    throw new errors.UserExists('User already exists');
  }

  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

  const newEntry = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  delete newEntry.password;
  return newEntry;
};
