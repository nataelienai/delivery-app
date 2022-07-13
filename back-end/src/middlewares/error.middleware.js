module.exports = function error(err, _req, res, _next) {
  if(err instanceof NotFound) {
    return res.status(404).json({ message: err.message });
  }

  if(err instanceof IncorrectPassword) {
    return res.status(400).json({ message: err.message });
  }

  if(err instanceof UserExists) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal server error' });
}

class IncorrectPassword extends Error {};
class NotFound extends Error {};
class UserExists extends Error {};

