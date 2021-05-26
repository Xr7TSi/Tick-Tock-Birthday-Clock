const User = require('./User');
const Wishlist = require('./Wishlist');


User.hasMany(Wishlist);

Wishlist.belongsTo(User);



module.exports = { User, Wishlist };