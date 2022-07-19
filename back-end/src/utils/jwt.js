const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const Path = require('path');
const { Unauthorized } = require('../errors');

const jwtSecret = readFileSync(
  Path.resolve(__dirname, '..', '..', 'jwt.evaluation.key'),
  { encoding: 'utf-8' },
);

function create(data) {
  return jwt.sign(data, jwtSecret, { algorithm: 'HS256' }, { expiresIn: '1h' });
}

function verify(token) {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    throw new Unauthorized('Token invalid');
  }
}

module.exports = {
  create,
  verify,
};
