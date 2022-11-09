const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sighting extends Model {};

Sighting.init(
    {
        entry_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        entry_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
                key: 'id',
            },
        },
    },
    {
        sequelize
    }
);

module.exports = Sighting;