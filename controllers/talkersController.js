const talkersService = require('../services/talkersService');
const httpStatus = require('../helpers/httpStatusCodes');

const TALKERS_FILE = './talker.json';

const getAllTalkers = async (_req, res) => {
  try {
    const talkersList = await talkersService.getAllTalkers(TALKERS_FILE);
    !talkersList
    ? res.status(httpStatus.NOT_FOUND).json({ message: '404 Nothing Found' })
    : res.status(httpStatus.OK).json(talkersList);
  } catch (err) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER).json({ message: 'Error when trying to perform operation' });
  }
};

module.exports = { getAllTalkers };
