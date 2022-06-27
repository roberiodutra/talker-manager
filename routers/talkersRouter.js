const express = require('express');

const { talkersController, addTalkerController } = require('../controllers');

const router = express.Router();

router.get('/talker', talkersController.getAllTalkers);
router.get('/talker/:id', talkersController.getTalkerById);
router.post('/login', talkersController.userLogin);
router.post('/talker', addTalkerController.addTalker);

module.exports = router;
