const sequelize = require('../config/connection');
const { User, Event, Bird } = require('../models');

const userData = require('./userData.json');
const eventData = require('./eventData.json');
const birdData = require('./birdData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const event of eventData) {
    await Event.create({
      ...event,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  // for (const bird of birdData) {
  //   await Bird.create({
  //     ...bird,
  //     event_id: event[Math.floor(Math.random() * event.length)].id,
  //   })
  // }

  process.exit(0);
};

seedDatabase();
