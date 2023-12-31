const { Answer, Question, Level, Quiz, User, Tag } = require('../models/index');

const mainController = {
    homePage: async (req, res) => {
        const quizzes = await Quiz.findAll({
            include: 'author'
        });
       
        //console.log(quizzes);
        
        res.render('home', {
        quizzes
        });
    }

}

module.exports = mainController;