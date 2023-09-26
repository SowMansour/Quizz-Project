const { Model, DataTypes } = require('sequelize');
const getConnexion = require('./getConnexion');

class Quiz extends Model {}

Quiz.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        modelName: 'Quiz',
        tableName: 'quiz',
    }
);

module.exports = Quiz;