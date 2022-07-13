const errors = require('../errors');

module.exports = function error(err, _req, res, _next) {
  if (err instanceof errors.NotFound) {
    return res.status(404).json({ message: err.message });
  }

  if (err instanceof errors.IncorrectPassword) {
    return res.status(400).json({ message: err.message });
  }

  if (err instanceof errors.UserExists) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal server error' });
};
