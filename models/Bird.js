const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bird extends Model {}

Bird.init(
  {
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
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Event',
        key: 'id',
      },
    },
  },
  {
    sequelize
  }
);

module.exports = Bird;
