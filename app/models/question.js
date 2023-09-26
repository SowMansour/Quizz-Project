const { Model, DataTypes } = require('sequelize');
const getConnexion = require('./getConnexion');

class Question extends Model {}

Question.init(
    {
        question: DataTypes.TEXT,
        anecdote: DataTypes.TEXT,
        wiki: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        answer_id: DataTypes.INTEGER,
        quiz_id: DataTypes.INTEGER,
        level_id: DataTypes.INTEGER,
    },
    {
        sequelize: getConnexion(),
        modelName: 'Question',
        tableName: 'question',
    }
);

module.exports = Question;