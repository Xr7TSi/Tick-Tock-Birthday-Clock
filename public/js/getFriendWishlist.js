const friendWishlistHandler = async (event) => {
  event.preventDefault();

  // Collect value from the friend wishlist form
  const friendName = document.querySelector("#friendName").value.trim();
 
  return friendName

  
}



document
  .querySelector(".friend-form")
  .addEventListener("submit", friendWishlistHandler);

 
  