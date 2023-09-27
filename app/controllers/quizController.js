const { Answer, Question, Level, Quiz, User, Tag } = require('../models/index');

const quizController = {
    getQuiz: async (req, res) => {
       const paramId = req.params.id;

       const quizzes = await Quiz.findByPk(paramId, {
        include: [
            {association: 'author'},
            {association: 'questions', include: ['answers', 'level']},
            {association: 'tags'}
        ]
       });

       //console.log(quizzes);

        res.render('quizz', {
            quizzes,
        });

    }
};



module.exports = quizController;