const addTalkerService = require('../services/addTalkerService');
const { httpStatus, errorMessages } = require('../helpers');

const TALKERS_FILE = './talker.json';

const addTalker = async (req, res) => {
  try {
    const { name, age, talk } = req.body;
    const newTalker = await addTalkerService.addTalker(TALKERS_FILE, name, age, talk);

    return res.status(httpStatus.CREATED).json(newTalker);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json({ message: errorMessages.INTERNAL_ERROR });
  }
};

module.exports = {
  addTalker,
};
