const { httpStatus, errorMessages } = require('../helpers');

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  switch (true) {
  case !name:
    return res.status(httpStatus.BAD_REQUEST).json({
      message: errorMessages.NAME_REQUIRED,
    });
  case name.length < 3:
    return res.status(httpStatus.BAD_REQUEST).json({
      message: errorMessages.INVALID_NAME,
    });
  default:
    next();
  }
};

const ageValidation = (req, res, next) => {
  const { age } = req.body;
  switch (true) {
  case !age:
    return res.status(httpStatus.BAD_REQUEST).json({
      message: errorMessages.AGE_REQUIRED,
    });
  case age < 18:
    return res.status(httpStatus.BAD_REQUEST).json({
      message: errorMessages.INVALID_AGE,
    });
  default:
    next();
  }
};

const talkValidation = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: errorMessages.TALK_REQUIRED,
    });
  }
  next();
};

const watchedAtValidation = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const DATE_MATCH_REGEX = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  switch (true) {
  case !watchedAt:
    return res.status(httpStatus.BAD_REQUEST).json({
      message: errorMessages.DATE_REQUIRED,
    });
  case !watchedAt.match(DATE_MATCH_REGEX):
    return res.status(httpStatus.BAD_REQUEST).json({
      message: errorMessages.INVALID_DATE,
    });
  default:
    next();
  }
};

const rateValidation = (req, res, next) => {
  const { talk: { rate } } = req.body;
  switch (true) {
  case rate === undefined:
    return res.status(httpStatus.BAD_REQUEST).json({
      message: errorMessages.RATE_REQUIRED,
    });
  case !Number.isInteger(rate) || rate < 1 || rate > 5:
    return res.status(httpStatus.BAD_REQUEST).json({
      message: errorMessages.INVALID_RATE,
    });
  default:
    next();
  }
};

module.exports = [
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
];
