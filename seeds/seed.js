const sequelize = require('../config/connection');
const { User, Bird } = require('../models');

const userData = require('./userData.json');
const birdData = require('./birdData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const bird of birdData) {
    await Bird.create({
      ...bird,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
