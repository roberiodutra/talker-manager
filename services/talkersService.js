const talkersModel = require('../models/talkersModel');

const getAllTalkers = async (filePath) => {
  const talkersList = await talkersModel.getAllTalkers(filePath);

  if (!talkersList) return [];

  return talkersList;
};

module.exports = { getAllTalkers };
