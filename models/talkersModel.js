const fs = require('fs/promises');

const getAllTalkers = async (filePath) => {
  const talkersList = JSON.parse(await fs.readFile(filePath));
  return talkersList;
};

module.exports = { getAllTalkers };
