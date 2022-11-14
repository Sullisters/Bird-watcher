const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {};

Event.init(
    {   date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
                isDate:true,
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weather: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(50),
        },
        event_image: {
            type:DataTypes.STRING,
        },
    },
    {
        sequelize
    }
);

module.exports = Event;