const { Model, DataTypes } = require('sequelize');
const getConnexion = require('./getConnexion');

class Tag extends Model {}

Tag.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        modelName: 'Tag',
        tableName: 'tag',
    }
);

module.exports = Tag;