module.exports = function error(err, _req, res, _next) {
  if(err instanceof NotFound) {
    return res.status(404).json({ message: err.message });
  }

  if(err instanceof IncorrectPassword) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal server error' });
}

class NotFound extends Error {};
class IncorrectPassword extends Error {};
