const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bird extends Model {}

Bird.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bird_species: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bird_colors: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bird_size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bird_diet: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        migration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        habitat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
                key: 'id',
            },
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event',
    }
);

module.exports = Bird;