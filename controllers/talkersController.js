const talkersService = require('../services/talkersService');
const { httpStatus, errorMessages } = require('../helpers');
const str = require('@supercharge/strings');

const TALKERS_FILE = './talker.json';

const randToken = (nbr) => str.random(nbr);

const getAllTalkers = async (_req, res) => {
  try {
    const talkersList = await talkersService.getAllTalkers(TALKERS_FILE);
    !talkersList
    ? res.status(httpStatus.NOT_FOUND).json({ message: errorMessages.NOT_FOUND })
    : res.status(httpStatus.OK).json(talkersList);
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
    !talkerFound
    ? res.status(httpStatus.NOT_FOUND).json({ message: errorMessages.TALKER_NOT_FOUND })
    : res.status(httpStatus.OK).json(talkerFound);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json({ message: errorMessages.INTERNAL_ERROR });
  }
};

const userLogin = (req, res) => {
  try {
    const { email, password } = req.body;
    const invalidLogin = talkersService.validateLogin(email, password);

    invalidLogin
    ? res.status(httpStatus.BAD_REQUEST).json({ message: invalidLogin })
    : res.status(httpStatus.OK).json({ token: randToken(16) });

  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json({ message: errorMessages.INTERNAL_ERROR });
  }
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  userLogin
};
