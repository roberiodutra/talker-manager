const talkersModel = require('../models/talkersModel');

const add = async (filePath, req) => {
  const { name, age, talk } = req.body;
  const oldTalkersList = await talkersModel.getAllTalkers(filePath);
  const newTalker = { id: oldTalkersList.length + 1, name, age, talk };
  oldTalkersList.push(newTalker);
  await talkersModel.addTalker(filePath, oldTalkersList);

  return newTalker;
};

const edit = async (filePath, req) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const talkersList = await talkersModel.getAllTalkers(filePath);
  const findTalker = talkersList.find((tk) => tk.id === +id);
  const editedTalker = { id: +id, name, age, talk };
  talkersList[findTalker.id] = editedTalker;
  await talkersModel.addTalker(filePath, talkersList);

  return editedTalker;
};

module.exports = { add, edit };
