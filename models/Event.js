const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {};

Event.init(
    {
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weather: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
                isDate:true,
            }
        },
        description: {
            type: DataTypes.STRING(50),
        },
        event_url: {
            type:DataTypes.STRING,
            validate: {
                isURL: true,
            }
        },
    },
    {
        sequelize
    }
);

module.exports = Event;