const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sighting extends Model {};

Sighting.init(
    {
        entry_date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true, 
            }
        },
        entry_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        entry_location: {
            type: DataTypes.STRING,
            allowNull:false, 
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