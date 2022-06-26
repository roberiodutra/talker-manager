const talkersModel = require('../models/talkersModel');

const EMAIL_REQUIRED = { message: 'O campo "email" é obrigatório' };
const INVALID_EMAIL = { message: 'O "email" deve ter o formato "email@email.com"' };
const PASSWORD_REQUIRED = { message: 'O campo "password" é obrigatório' };
const INVALID_PASSWORD = { message: 'O "password" deve ter pelo menos 6 caracteres' };

const getAllTalkers = async (filePath) => {
  const talkersList = await talkersModel.getAllTalkers(filePath);

  !talkersList ? [] : talkersList;
};

const validateLogin = (email, password) => {

}

module.exports = {
  getAllTalkers,
  validateLogin
};
