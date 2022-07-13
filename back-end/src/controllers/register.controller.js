const services = require('../services');

module.exports = async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const user = await services.login(name, email, password);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}
