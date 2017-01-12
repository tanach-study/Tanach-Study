const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

function getUserToken (user) {
  return new Promise((resolve, reject) => {
    jwt.sign({ data: user }, SECRET, { expiresIn: '4h' }, (err, token) => {
      if (err) return reject(err);
      resolve(token);
    });
  });
}

function getUserData (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
}

function authenticate (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return next(err);
    res.userData = decoded.data;
    next();
  });
}

module.exports = {
  getUserToken,
  getUserData,
  authenticate,
}
