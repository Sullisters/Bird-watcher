const User = require('./User');
const Bird = require('./Bird');
const Event = require('./Event');
const Sighting = require('./Sighting')

Event.belongsTo(User, {
  onDelete: 'CASCADE'
});

User.hasMany(Event);

// Friend.belongsTo(User, {
//   foreignKey: 'user_id'
// })

Event.hasMany(Bird, {
  onDelete: 'CASCADE'
});

Bird.belongsTo(Event);

Bird.hasMany(Sighting, {
  onDelete: 'CASCADE'
});

Sighting.belongsTo(Bird, {
});

module.exports = { User, Bird, Event, Sighting };
