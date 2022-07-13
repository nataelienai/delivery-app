const { User } = require('../database/models');

module.exports = async function register(name, email, password) {
  const user = await User.find({
    where: {
      email,
    },
  });

  if (user) {
    throw new UserExists('User already exists');
  }

  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

  const newEntry = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  delete newEntry.password;
  return newEntry;
}
