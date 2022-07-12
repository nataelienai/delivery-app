// const crypto = require('crypto');
const { User } = require('../database/models');

async function login(email, _passwordPayload) {
  const user = await User.find({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
}

module.exports = {
  login,
};
