const talkersModel = require('../models/talkersModel');

const addTalker = async (filePath, name, age, talk) => {
  const oldTalkersList = await talkersModel.getAllTalkers(filePath);
  const newTalker = { id: oldTalkersList.length + 1, name, age, talk };
  oldTalkersList.push(newTalker);
  await talkersModel.addTalker(filePath, oldTalkersList);

  return newTalker;
};

module.exports = {
  addTalker,
};
