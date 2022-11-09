const sequelize = require('../config/connection');
// const seedUsers = require('./'); //ADD FILE PATHS
const seedBirds = require('./birdData');
// const seedEvents = require('./') //ADD FILE PATHS

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBirds();

  await seedEvents();

  await seedUsers();

  process.exit(0);
};

seedAll();
