const services = require('../services');

module.exports = async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await services.login(email, password);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}
