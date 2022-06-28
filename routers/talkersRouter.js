const express = require('express');
const { talkersController, crudController } = require('../controllers');
const bodyValidation = require('../middlewares/bodyValidation');
const tokenAuth = require('../middlewares/tokenAuth');

const router = express.Router();

router.get('/talker', talkersController.getAllTalkers);
router.get('/talker/:id', talkersController.getTalkerById);
router.post('/login', talkersController.userLogin);
router.post('/talker', tokenAuth, bodyValidation, crudController.add);
router.put('/talker/:id', tokenAuth, bodyValidation, crudController.edit);
router.delete('/talker/:id', tokenAuth, crudController.remove);

module.exports = router;
