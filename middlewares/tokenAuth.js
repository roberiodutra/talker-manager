const { httpStatus, errorMessages } = require('../helpers');

const TOKEN_LENGTH = 16;

const tokenAuth = (req, res, next) => {
  const { authorization } = req.headers;

  switch (true) {
  case !authorization:
    return res.status(httpStatus.UNAUTHORIZED).json(errorMessages.TOKEN_NOT_FOUND);
  case authorization.length !== TOKEN_LENGTH:
    return res.status(httpStatus.UNAUTHORIZED).json(errorMessages.INVALID_TOKEN);
  default:
    next();
  }
};

module.exports = tokenAuth;
