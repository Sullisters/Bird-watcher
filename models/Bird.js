const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bird extends Model {}

Bird.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate:{
        isDate:true,
      }
    },
    bird_species: {
      type: DataTypes.STRING,
    },
    bird_colors: {
      type: DataTypes.STRING,
    },
    bird_size: {
      type: DataTypes.STRING(30),
    },
    bird_diet: {
      type: DataTypes.STRING(20),
    },
    migration: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    activity: {
      type: DataTypes.STRING(100),
    },
    image_url: {
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

module.exports = Bird;

module.exports = Bird;