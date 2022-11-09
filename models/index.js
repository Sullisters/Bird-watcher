const User = require('./User');
const Event = require('./Event');
const Friend = require('./Friend');

Event.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Friend.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Event, Friend };
