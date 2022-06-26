const talkersService = require('../services/talkersService');
const httpStatus = require('../helpers/httpStatusCodes');
const str = require('@supercharge/strings');

const TALKERS_FILE = './talker.json';
const INTERNAL_ERROR_MESSAGE = { message: 'Error when trying to perform operation' };

const randToken = (nbr) => str.random(nbr);

const getAllTalkers = async (_req, res) => {
  try {
    const talkersList = await talkersService.getAllTalkers(TALKERS_FILE);
    !talkersList
    ? res.status(httpStatus.NOT_FOUND).json({ message: '404 Nothing Found' })
    : res.status(httpStatus.OK).json(talkersList);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json(INTERNAL_ERROR_MESSAGE);
  }
};

const getTalkerById = async (req, res) => {
  try {
    const { id } = req.params;
    const talkersList = await talkersService.getAllTalkers(TALKERS_FILE);
    const talkerFound = talkersList.find((tk) => tk.id === +id);
    !talkerFound
    ? res.status(httpStatus.NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' })
    : res.status(httpStatus.OK).json(talkerFound);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json(INTERNAL_ERROR_MESSAGE);
  }
};

const userLogin = (req, res) => {
  try {
    const { email, password } = req.body;
    const invalidLogin = talkersService.validateLogin(email, password);

    invalidLogin
    ? res.status(httpStatus.BAD_REQUEST).json(invalidLogin)
    : res.status(httpStatus.OK).json({ token: randToken(16) });

  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json(INTERNAL_ERROR_MESSAGE);
  }
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  userLogin
};
