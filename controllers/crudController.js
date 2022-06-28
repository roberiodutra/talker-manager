const crudService = require('../services/crudService');
const { httpStatus, errorMessages } = require('../helpers');

const TALKERS_FILE = './talker.json';

const add = async (req, res) => {
  try {
    const newTalker = await crudService.add(TALKERS_FILE, req);

    return res.status(httpStatus.CREATED).json(newTalker);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json(errorMessages.INTERNAL_ERROR);
  }
};

const edit = async (req, res) => {
  try {
    const editedTalker = await crudService.edit(TALKERS_FILE, req);
    return res.status(httpStatus.OK).json(editedTalker);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json(errorMessages.INTERNAL_ERROR);
  }
};

module.exports = { add, edit };
