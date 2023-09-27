const express = require('express');
const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagsController = require('./controllers/tagsController');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/quiz/:id', quizController.getQuiz);

router.get('/tags', tagsController.getTags);
router.get('/tag/:id', tagsController.getTag);


module.exports = router;