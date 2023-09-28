const express = require('express');
const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagsController = require('./controllers/tagsController');
const userController = require('./controllers/userController');
const adminController= require('./controllers/adminController');

const userMiddleware = require('./middlewares/user');
const adminMiddleware = require('./middlewares/admin');
const checkEmail = require('./middlewares/checkEmail');


const router = express.Router();

router.get('/', mainController.homePage);

router.get('/quiz/:id', quizController.getQuiz);

router.get('/tags', tagsController.getTags);
router.get('/tag/:id', tagsController.getTag);

router.get('/signup', userController.signup);
//retieve form data
router.post('/signup', checkEmail, userController.register);

router.get('/login', userController.login);
router.post('/login', checkEmail, userController.userCheckIn);

router.get('/logout', userMiddleware, userController.logout);

router.get('/profil', userMiddleware, userController.getProfile);
router.get('/admin', [userMiddleware, adminMiddleware], adminController.getAdmin);





module.exports = router;