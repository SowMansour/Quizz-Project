const express = require('express');
const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagsController = require('./controllers/tagsController');
const userController = require('./controllers/userController');


const router = express.Router();

router.get('/', mainController.homePage);

router.get('/quiz/:id', quizController.getQuiz);

router.get('/tags', tagsController.getTags);
router.get('/tag/:id', tagsController.getTag);

router.get('/signup', userController.signup);
//retieve form data
router.post('/signup', userController.register);

router.get('/login', userController.login);

module.exports = router;