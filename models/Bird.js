const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bird extends Model {}

Bird.init(
    {
        common_name: {
            type: DataTypes.STRING
        },
        species_name: {
            type: DataTypes.STRING
        },
        bird_description: {
            type: DataTypes.STRING
        },
        color: {
            type: DataTypes.STRING
        },
        habitat: {
            type: DataTypes.STRING
        },
        migration_info: {
            type: DataTypes.STRING
        },
        diet: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize
    }
);


module.exports = Bird;