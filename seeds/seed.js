const sequelize = require('../config/connection');
const { User, Event, Bird } = require('../models');

const userData = require('./userData.json');
const eventData = require('./eventData.json')
const birdData = require('./birdData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  const events = await Event.bulkCreate(eventData, {
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
