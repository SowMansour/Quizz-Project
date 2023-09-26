const { Model, DataTypes } = require('sequelize');
const getConnexion = require('./getConnexion');

class User extends Model {
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize: getConnexion(),
        modelName: 'User',
        tableName: 'user',
    }
);

module.exports = User;
