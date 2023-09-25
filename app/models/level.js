const { Model, DataTypes, literal } = require('sequelize');
const getConnexion = require('./getConnexion');

class Level extends Model {}

Level.init(
    {
        id: {
            //type: Sequelize.INTEGER
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            // literal permet de dire à postgres d'exécuter une fonction
            defaultValue: literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        // obligatoire : une instance de sequelize qui peut se connecter à la BDD
        sequelize: getConnexion(),
        modelName: 'Level',
        tableName: 'level',
    }
);

module.exports = Level;