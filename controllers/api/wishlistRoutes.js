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


// get wishlist by user return as JSON payload.  this is in progress
router.get("/userId/:id", async (req, res) => {
  try {
    const selectedUserWishlist = await User.findOne({
      where: { id: req.params.id },
      include: {
        model: Wishlist,
        attributes: [
          "wishlist_text",
        ],
      },
    });
    if (!selectedUserWishlist) {
      res.status(404).json({ message: "User does not exist" });
      return;
    }
    res.status(200).json(selectedUserWishlist);
  } catch (err) {
    res.status(500).json(err);
  }
});



// get single wishlist by id and return selected wishlist as JSON payload
router.get("/:id", async (req, res) => {
  try {
    const selectedWishlist = await Wishlist.findOne({
      where: { wishlist_id: req.params.id },
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

// post a new wishlist to the database and return new wishlist as JSON payload
 /* post should look like this...
    {
        "wishlist_array": ["Super Soaker Extreme", "RC Truck", "Baseball"]
    }
    */
router.post("/", async (req, res) => {
  try {
    const newWishlist = await Wishlist.create(req.body);
    res.status(200).json(newWishlist);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a wishlist by wishlist_id and return updated wishlist as JSON payload
 /* put should look like this...
      {
        "wishlist_id": "6",
        "wishlist_array": ["Super Soaker Extreme", "RC Truck", "Volleyball"]
      }
    */
router.put("/:id", async (req, res) => {  
    try {
      const updateWishlist = await Wishlist.update(req.body, {
        where: {
          wishlist_id: req.params.id,
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

// delete a wishlist by its `id` value
router.delete("/:id", async (req, res) => {
    try {
    const wishlistDelete = await Wishlist.destroy({
        where: {
        wishlist_id: req.params.id,
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



module.exports = router;
