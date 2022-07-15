const { InvalidPassword, NotFound, UserAlreadyExists } = require('../errors');

module.exports = function error(err, _req, res, _next) {
  if (err instanceof NotFound) {
    return res.status(404).json({ message: err.message });
  }

  if (err instanceof InvalidPassword) {
    return res.status(400).json({ message: err.message });
  }

  if (err instanceof UserAlreadyExists) {
    return res.status(409).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal server error' });
};
