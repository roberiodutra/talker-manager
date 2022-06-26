const express = require('express');

const talkersController = require('../controllers/talkersController');

const router = express.Router();

router.get('/talker', talkersController.getAllTalkers);
router.get('/talker/:id', talkersController.getTalkerById);
router.post('/login', talkersController.userLogin);

module.exports = router;
