const fs = require('fs/promises');

const getAllTalkers = async (filePath) => {
  const talkersList = JSON.parse(await fs.readFile(filePath));
  return talkersList;
};

const addTalker = async (filePath, newList) => {
  await fs.writeFile(filePath, JSON.stringify(newList));
};

module.exports = { getAllTalkers, addTalker };
