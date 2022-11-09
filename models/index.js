const User = require('./User');
const Bird = require('./Bird');
const Event = require('./Event');
const Sighting = require('./Sighting')

Event.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Event);

// Friend.belongsTo(User, {
//   foreignKey: 'user_id'
// })

Event.hasMany(Bird, {
  foreignKey: 'event_id',
  onDelete: 'CASCADE'
});

Bird.belongsTo(Event, {
  foreignKey: 'event_id'
});

Bird.hasMany(Sighting, {
  foreignKey: 'bird_id',
  onDelete: 'CASCADE'
});

Sighting.belongsTo(Bird, {
  foreignKey: 'bird_id'
});

module.exports = { User, Bird, Event, Sighting };
