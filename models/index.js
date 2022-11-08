const User = require('./User');
const Event = require('./Event');

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Event };
