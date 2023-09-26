require('dotenv').config();
const { Question, Level, Quiz, User, Tag } = require('./app/models');


async function test() {
    //Trouver les niveaux avec leur questions associées

    // notre requête : sert à sélectionner tous les niveaux et toutes les questions associées
    // const levels = await Level.findAll({
    //     include: 'questions',
    // });

    // // console.log(levels);

    // // on extrait un niveau de notre tableau de niveaux
    // const level = levels[1];

    // // level.question est un tableau qui ne contient que des objets questions associées à un level précis
    // console.log(level.questions);

    // // On extrait les questions associées à ce niveau
    // const questionText = level.questions.map((question) => question.question);

    // // On obient les questions associées à un niveau
    // console.log(questionText);

    // const questions = await Question.findAll({ limit: 1, include: 'level' });

    // console.log(questions);

    const quizWithLevel = await Quiz.findAll({
        include: [
            {
                association: 'questions',
                include: [
                    {
                        association: 'level',
                    },
                ],
            },
        ],
    });

    console.log(quizWithLevel);

    // const user = await User.findAll({
    //     // On trie la réponse par date de creation décroissantes
    //     order: [['created_at', 'DESC']],
    //     attributes: { exclude: ['password', 'updated_at'] },
    //     include: {
    //         association: 'quizzes',
    //         attributes: ['title'],
    //     },
    // });

    // console.log(JSON.stringify(user, null, 2));


    process.exit();
}

test() 