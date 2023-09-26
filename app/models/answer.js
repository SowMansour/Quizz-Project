const { Model, DataTypes } = require('sequelize');
const getConnexion = require('./getConnexion');
// on extraie Model de sequelize
// destructuring
const { Model } = require('sequelize');
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