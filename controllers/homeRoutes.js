const router = require("express").Router();
const session = require("express-session");
const User = require("../models/User");
const Wishlist = require("../models/Wishlist");
const withAuth = require("../utils/auth");


router.get("/", async (req, res) => {
  res.render("homepage");
});

// Use withAuth middleware to prevent access to route
router.get("/dashboard", withAuth, async (req, res) => {
  console.log(req.session);
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    console.log(userData);
    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

// renders addWishlistItem.handlebars from the /post endpoint
router.get("/post", (req, res) => {
  res.render("addWishlistItem");
});

// renders sharedWishList.handlebars from the /wishlist endpoint
router.get("/wishlist", async (req, res) => {
  try {
    const userWishlist = await User.findByPk(req.session.user_id, {
      include: [{ model: Wishlist }],
    });

    if (!userWishlist) {
      res.status(404).json({ message: "No wishlist exists." });
      return;
    }
    // const userWishlistMapped = userWishlist.map((wishlist) =>
    //   wishlist.get({ plain: true })
    // );
    // res.render("sharedWishlist", { userWishlistMapped });
    res.render("sharedWishlist");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// this route gets an empty wishlist template.  used for testing
// router.get("/wishlist", async (req, res) => {res.render("sharedWishlist")})
  

module.exports = router;
