const express = require('express');

const talkersController = require('../controllers/talkersController');

const router = express.Router();

router.get('/talker', talkersController.getAllTalkers);

module.exports = router;
