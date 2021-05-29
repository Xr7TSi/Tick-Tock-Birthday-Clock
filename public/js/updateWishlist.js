const updateWishlistHandler = async (event) => {
    event.preventDefault();
    const updatewishlistEntry = document.querySelector("#wishlistEntry").value.trim();
    // code to get wishlist from form
    if (updatewishlistEntry) {
      const response = await fetch('./api/wishlist', {
        method: 'POST',
        body: JSON.stringify({ updatewishlistEntry }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to post.");
      }
  
      if (response.ok) {console.log("HI"), console.log(wishlistEntry + "  updateWishlist.js");
      } else {
        alert("Failed to update wishlist.");
      }
    } 
  };
  
  document
    .querySelector(".post-form")
    .addEventListener("submit", updateWishlistHandler);