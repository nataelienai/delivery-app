const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const Path = require('path');

const jwtSecret = readFileSync(
  Path.resolve(__dirname, '..', '..', 'jwt.evaluation.key'),
  { encoding: 'utf-8' },
);

function create(data) {
  return jwt.sign(data, jwtSecret, { algorithm: 'HS256' }, { expiresIn: '1h' });
}

function verify(token) {
  return jwt.verify(token, jwtSecret);
}

module.exports = {
  create,
  verify,
};
