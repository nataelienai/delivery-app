const error = require('./error.middleware');
const auth = require('./auth.middleware');

module.exports = {
  error,
  ...auth,
};
