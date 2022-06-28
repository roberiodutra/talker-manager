const editTalkerService = require('../services/editTalkerService');
const { httpStatus, errorMessages } = require('../helpers');

const TALKERS_FILE = './talker.json';

const editTalker = async (req, res) => {
  try {
    const editedTalker = await editTalkerService.editTalker(TALKERS_FILE, req);
    return res.status(httpStatus.OK).json(editedTalker);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json(errorMessages.INTERNAL_ERROR);
  }
};

module.exports = {
  editTalker,
};
