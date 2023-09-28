const express = require('express');
const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagsController = require('./controllers/tagsController');
const userController = require('./controllers/userController');
const adminController= require('./controllers/adminController');

const userMiddleware = require('./middlewares/user');
const adminMiddleware = require('./middlewares/admin');
const checkEmail = require('./middlewares/checkEmail');
const { catchErrors } = require('./middlewares/handlers/errorHandlers');
//catchErrors s'utilise seulement sur les chemins async/await

const router = express.Router();

router.get('/', catchErrors(mainController.homePage));
router.get('/quiz/:id', catchErrors(quizController.getQuiz));

router.get('/tags', catchErrors(tagsController.getTags));
router.get('/tag/:id', catchErrors(tagsController.getTag));

router.get('/signup', userController.signup);
//retieve form data
router.post('/signup', checkEmail, catchErrors(userController.register));

router.get('/login', userController.login);
router.post('/login', checkEmail, catchErrors(userController.userCheckIn));

router.get('/logout', userMiddleware, userController.logout);

router.get('/profil', userMiddleware, userController.getProfile);
router.get('/admin', [userMiddleware, adminMiddleware], adminController.getAdmin);





module.exports = router;