const User = require('./User');
const Wishlist = require('./Wishlist');


User.hasMany(Wishlist, {
  foreignKey: 'wishlist_id',
  onDelete: 'CASCADE',
});

Wishlist.belongsTo(User, {
  foreignKey: 'wishlist_id',
});



module.exports = { User, Wishlist };