const router = require('express').Router();
const User = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    
  res.render('homepage');
  });


// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  console.log(req.session)
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    console.log(userData)
    const user = userData.get({ plain: true });
    
    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});



// renders addWishlistItem.handlebars from the /post endpoint
router.get('/post', (req, res) => {
  
  res.render('addWishlistItem');
});

// renders sharedWishList.handlebars from the /wishlist endpoint
// router.get('api/users/', (req, res) => {
//   res.render('sharedWishlist');
// });










module.exports = router;