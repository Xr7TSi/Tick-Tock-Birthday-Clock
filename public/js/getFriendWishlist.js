const friendWishlistHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const friendName = document.querySelector("#friendName").value.trim();
 

  if (friendName) {
    
    console.log(friendName);
    const response = await fetch('/friendFoundWishlist', {
      method: 'POST',
      body: JSON.stringify({friendName}),
      headers: { 'Content-Type': 'application/json' },
    
    });

    if (response.ok) {
      console.log("response ok");
    } else {
      alert("Oh no!");
    }
  }
};

document
  .querySelector(".friend-form")
  .addEventListener("submit", friendWishlistHandler);

 
