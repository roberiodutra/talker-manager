const talkersModel = require('../models/talkersModel');
const { errorMessages } = require('../helpers');

const mailFormat = /(.+)@(.+){2,}\.(.+){2,}/;

const getAllTalkers = async (filePath) => {
  const talkersList = await talkersModel.getAllTalkers(filePath);

  if (!talkersList) return [];

  return talkersList;
};

const validateLogin = (email, password) => {
  switch (true) {
  case !email:
    return errorMessages.EMAIL_REQUIRED;
  case !email.match(mailFormat):
    return errorMessages.INVALID_EMAIL;
  case !password:
    return errorMessages.PASSWORD_REQUIRED;
  case password.length < 6:
    return errorMessages.INVALID_PASSWORD;
  default:
    return false;
  }
}

module.exports = {
  getAllTalkers,
  validateLogin
};
