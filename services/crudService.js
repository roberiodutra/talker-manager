const talkersModel = require('../models/talkersModel');

const add = async (filePath, req) => {
  const { name, age, talk } = req.body;
  const talkersList = await talkersModel.getAllTalkers(filePath);
  const newTalker = { id: talkersList.length + 1, name, age, talk };
  talkersList.push(newTalker);
  await talkersModel.addTalker(filePath, talkersList);

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

const remove = async (filePath, req) => {
  const { id } = req.params;
  const talkersList = await talkersModel.getAllTalkers(filePath);
  const findIndexById = talkersList.findIndex((tk) => tk.id === +id);
  talkersList.splice(findIndexById, 1);
  await talkersModel.addTalker(filePath, talkersList);
};

module.exports = { add, edit, remove };
