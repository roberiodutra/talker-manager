const express = require('express');
const { talkersController, addTalkerController } = require('../controllers');
const bodyValidation = require('../middlewares/bodyValidation');
const tokenAuth = require('../middlewares/tokenAuth');

const router = express.Router();

router.get('/talker', talkersController.getAllTalkers);
router.get('/talker/:id', talkersController.getTalkerById);
router.post('/login', talkersController.userLogin);
router.post('/talker', tokenAuth, bodyValidation, addTalkerController.addTalker);

module.exports = router;
