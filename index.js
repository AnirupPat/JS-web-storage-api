localStorage.setItem("name", "Anirup");
localStorage.setItem("cartItemCount", 10);

let cartItems = [
  {
    name: "Macbook",
    quantity: 1,
  },
  {
    name: "iPhone",
    quantity: 1,
  },
];

localStorage.setItem("cartItem", JSON.stringify(cartItems));
console.log(JSON.parse(localStorage.getItem("cartItem")));
