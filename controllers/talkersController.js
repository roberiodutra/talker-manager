const str = require('@supercharge/strings');
const talkersService = require('../services/talkersService');
const { httpStatus, errorMessages } = require('../helpers');

const TALKERS_FILE = './talker.json';

const randToken = (nbr) => str.random(nbr);

const getAllTalkers = async (_req, res) => {
  try {
    const talkersList = await talkersService.getAllTalkers(TALKERS_FILE);
    if (!talkersList) {
      return res.status(httpStatus.NOT_FOUND).json({ message: errorMessages.NOT_FOUND });
    }
    return res.status(httpStatus.OK).json(talkersList);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json({ message: errorMessages.INTERNAL_ERROR });
  }
};

const getTalkerById = async (req, res) => {
  try {
    const { id } = req.params;
    const talkersList = await talkersService.getAllTalkers(TALKERS_FILE);
    const talkerFound = talkersList.find((tk) => tk.id === +id);
    if (!talkerFound) {
      return res.status(httpStatus.NOT_FOUND).json({ message: errorMessages.TALKER_NOT_FOUND });
    }
    return res.status(httpStatus.OK).json(talkerFound);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json({ message: errorMessages.INTERNAL_ERROR });
  }
};

const userLogin = (req, res) => {
  try {
    const { email, password } = req.body;
    const invalidLogin = talkersService.validateLogin(email, password);
    if (invalidLogin) {
      return res.status(httpStatus.BAD_REQUEST).json({ message: invalidLogin });
    }
    return res.status(httpStatus.OK).json({ token: randToken(16) });
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json({ message: errorMessages.INTERNAL_ERROR });
  }
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  userLogin,
};
