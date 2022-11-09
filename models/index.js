const User = require('./User');
const Bird = require('./Bird');
const Event = require('./Event');
const Sighting = require('./Sighting')

Event.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

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

Event.hasMany(Sighting, {
  foreignKey: 'event_id',
  onDelete: 'CASCADE'
});

Sighting.belongsTo(Event, {
  foreignKey: 'event_id'
});

module.exports = { User, Bird, Event, Sighting };
