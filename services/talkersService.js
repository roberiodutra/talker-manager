const talkersModel = require('../models/talkersModel');
const { errorMessages } = require('../helpers');

const mailFormat = /(.+)@(.+){2,}\.(.+){2,}/;

const getAllTalkers = async (filePath) => {
  const talkersList = await talkersModel.getAllTalkers(filePath);

  if (!talkersList) return [];

  return talkersList;
};

const validateLogin = (email, password) => {

}

module.exports = {
  getAllTalkers,
  validateLogin
};
