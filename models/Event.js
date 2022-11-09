const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
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
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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
  },
  {
    sequelize,
  }
);

module.exports = Event;
