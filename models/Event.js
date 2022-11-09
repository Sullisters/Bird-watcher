const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {};

Event.init(
    {
        // title: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
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
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "User",
                key: 'id',
            },
        },
    },
    {
        sequelize
    }
);

module.exports = Event;