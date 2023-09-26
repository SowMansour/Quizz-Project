// The order in which the association is defined is relevant.

const Answer = require('./answer');
const Level = require('./level');
const Question = require('./question');
const Quiz = require('./quiz');
const Tag = require('./tag');
const User = require('./user');

Level.hasMany(Question, {
    as: 'questions',
    foreignKey: 'level_id',
});
// question.level
Question.belongsTo(Level, {
    as: 'level',
    foreignKey: 'level_id',
});

// One To Many
Question.hasMany(Answer, {
    as: 'answers',
    foreignKey: 'question_id',
});

Answer.belongsTo(Question, {
    as: 'question',
    foreignKey: 'question_id',
});

// La bonne réponse : One to One
// belongsTo === appartient à === est associé uniquement à
Question.belongsTo(Answer, {
    as: 'good_answer',
    foreignKey: 'answer_id',
});

// Quiz et Question
Quiz.hasMany(Question, {
    as: 'questions',
    foreignKey: 'quiz_id',
});

Question.belongsTo(Quiz, {
    as: 'quiz',
    foreignKey: 'quiz_id',
});

// User et Quiz : User créé un ou plusieurs Quiz
User.hasMany(Quiz, {
    as: 'quizzes',
    foreignKey: 'user_id',
});

Quiz.belongsTo(User, {
    as: 'author',
    foreignKey: 'user_id',
});

// Quiz et Tag
Quiz.belongsToMany(Tag, {
    as: 'tags',
    through: 'quiz_has_tag',
    foreignKey: 'quiz_id',
    otherKey: 'tag_id',
});

Tag.belongsToMany(Quiz, {
    as: 'quizzes',
    through: 'quiz_has_tag',
    foreignKey: 'tag_id',
    otherKey: 'quiz_id',
});


module.exports = {
    Answer,
    Level,
    Question,
    Quiz,
    Tag,
    User,
}