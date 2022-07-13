const crypto = require('crypto');
const jwt = require('../utils/jwt');
const { User } = require('../database/models');

async function login(email, password) {
  const user = await User.find({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const hashedPassword = crypto.createHash('md5').update(password).digest("hex");

  if (user.password !== hashedPassword) {
    throw new Error('Incorrect password');
  }

  delete user.password;
  const token = jwt.create(user);

  return { ...user, token };
}

module.exports = {
  login,
};
