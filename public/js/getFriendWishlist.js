const wishlistFormHandler = async (event) => {
  event.preventDefault();

  // collect value from friend-form on getFriendWishlist.handlebars
  const friendName = document.querySelector("#friendName").value.trim();
  console.log(friendName + " is identified by handler");

  if (friendName) {
    // send a GET request to the friendFoundWishlist/friendName endpoint
    const response = await fetch(`/friendFoundWishlist/${friendName}`, {
      method: "GET",
    });

    if (response.ok) {
      document.location.replace(`/friendFoundWishlist/${friendName}`);
      console.log("Hi");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".friend-form")
  .addEventListener("submit", wishlistFormHandler);
