const InvalidPassword = require('./invalidpassword.error');
const NotFound = require('./notfound.error');
const UserAlreadyExists = require('./useralreadyexists.error');
const Unauthorized = require('./unauthorized.error');

module.exports = {
  InvalidPassword,
  NotFound,
  UserAlreadyExists,
  Unauthorized,
};
