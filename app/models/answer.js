const { Model, DataTypes } = require('sequelize');
const getConnexion = require('./getConnexion');

class Answer extends Model {}

Answer.init(
    {
        description: DataTypes.TEXT,
        question_id: DataTypes.INTEGER,
    },
    {
        sequelize: getConnexion(),
        modelName: 'Answer',
        tableName: 'answer',
    }
);

module.exports = Answer;