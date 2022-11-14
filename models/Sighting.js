const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sighting extends Model {};

Sighting.init(
    {   
        entry_description: {
            type: DataTypes.TEXT,
        },
        map_url: {
            type:DataTypes.STRING,
            validate: {
                isURL: true,
            }
        }
    },
    {
        sequelize
    }
);

module.exports = Sighting;