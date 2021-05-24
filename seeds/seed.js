const sequelize = require('../config/connection');
const User = require('../models/User');

const userData = require('./userData.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

    // creates wishlist table and seeds with content.
  await Wishlist.bulkCreate(wishlistData);

  process.exit(0);
 
};

seedDatabase();
