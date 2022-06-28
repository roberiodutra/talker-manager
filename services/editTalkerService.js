const talkersModel = require('../models/talkersModel');

const editTalker = async (filePath, req) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const talkersList = await talkersModel.getAllTalkers(filePath);
  const findTalker = talkersList.find((tk) => tk.id === +id);
  const editedTalker = { id: +id, name, age, talk };
  talkersList[findTalker.id] = editedTalker;
  await talkersModel.addTalker(filePath, talkersList);

  return editedTalker;
};

module.exports = {
  editTalker,
};
