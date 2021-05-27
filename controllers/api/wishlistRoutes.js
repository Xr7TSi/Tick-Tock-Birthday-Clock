const router = require("express").Router();
const { Wishlist } = require("../../models");
const { User } = require("../../models");

//this is the api/wishlist endpoint

// get all wishlist and return as JSON payload
router.get("/", async (req, res) => {
  const allWishlist = await Wishlist.findAll().catch((err) => {
    res.json(err);
  });
  res.json(allWishlist);
});


// get single wishlist by id and return selected wishlist as JSON payload
router.get("/:id", async (req, res) => {
  try {
    const selectedWishlist = await Wishlist.findOne({
      where: { id: req.params.id },
    });
    if (!selectedWishlist) {
      res.status(404).json({ message: "Wishlist does not exist" });
      return;
    }
    res.status(200).json(selectedWishlist);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post a new wishlist item to the database
// this is the api/wishlist/ endpoint
/* post should look like this...
    {
        "wishlistEntry": "Super Soaker Extreme"
    }
    */
router.post("/", async (req, res) => {
  console.log(req.session)
  try {
    const wishlistEntry = await Wishlist.create({
      user_id: req.session.user_id,
      wishlist_text: req.body.wishlistEntry
    });
    res.status(200).json(wishlistEntry);
    console.log(wishlistEntry + " router post")
  } catch (err) {
    res.status(400).json(err);
    
  }
});


// update a wishlist by id and return updated wishlist as JSON payload.  this is the /api/wishlist/:id endpoint
/* put should look like this...
      {
        "id": "6",
        "wishlist_text": "Volleyball"
      }
    */
router.put("/:id", async (req, res) => {
  try {
    const updateWishlist = await Wishlist.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateWishlist[0]) {
      res.status(404).json({ message: "Wishlist not found." });
      return;
    }
    res.status(200).json(updateWishlist);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a wishlist by its `id` value.  this is the /api/wishlist/:id endpoint
router.delete("/:id", async (req, res) => {
  try {
    const wishlistDelete = await Wishlist.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!wishlistDelete) {
      res.status(404).json({ message: "Wishlist not found" });
      return;
    }
    res.status(200).json(wishlistDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});


// render getFriendWishlist.handlebars.  Is used for selecting a friend's wishlist.  this is the /friendWishlist endpoint
router.get("/friendWishlist", (req, res) => {
  res.render("getFriendWishlist");
});

// renders userWishlist.handlebars using friend's name.  this is the /friendFoundWishlist endpoint
router.get("/friendFoundWishlist", async (req, res) => {
  
  try {
    const userData = await User.findOne({
      where: { email: "amiko2k20.com" },
      // were: {email: req.body.friendName},
      include: [{ model: Wishlist }],
    });
    const user = userData.get({ plain: true });
    
    if (!user) {
      res.status(404).json({ message: "User does not exist" });
      return;
    }
    console.log(user);
    res.render("userWishlist", { ...user });
  } catch (err) {
    // res.status(500).json(err);
    res.status(500).json("Ouch");
  }
});





module.exports = router;