const sharedWishlistHandler = async (event) => {
  event.preventDefault();
  const wishlistEntry = document.querySelector("#wishlistEntry").value.trim();

  // code to get wishlist from form
  if (wishlistEntry) {
    const response = await fetch("/api/content", {
      method: "POST",
      body: JSON.stringify({ wishlistEntry }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to post.");
    }
  }
};

document
  .querySelector(".post-form")
  .addEventListener("submit", sharedWishlistHandler);