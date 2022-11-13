const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bird extends Model {}

Bird.init(
  {
    name: {
      type: DataTypes.STRING,
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
    weight: {
      type: DataTypes.STRING
    },
    bird_diet: {
      type: DataTypes.STRING(20),
    },
    migration: {
      type: DataTypes.STRING,
    },
    habitat: {
      type:DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    activity: {
      type: DataTypes.STRING(100),
    },
    description: {
      type: DataTypes.TEXT,
    },
    bird_image: {
      type:DataTypes.STRING,
    },
    
  },
  {
    sequelize
  }
);

module.exports = Bird;

module.exports = Bird;