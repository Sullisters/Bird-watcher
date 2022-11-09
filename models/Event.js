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
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize
    }
);

module.exports = Event;