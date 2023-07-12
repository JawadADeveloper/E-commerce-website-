var bigImg = document.getElementById("bigImg");
var smallImg = document.getElementsByClassName("small-Img");

for (var i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = function() {
    bigImg.src = this.src;
  };
}



var priceElement = document.getElementById("totalPrice");
var quantityInput = document.getElementById("quantity");

quantityInput.addEventListener("input", updateTotalPrice);

function updateTotalPrice() {
  var price = 132.2; // Replace with your actual price value
  var quantity = parseInt(quantityInput.value);
  var totalPrice = price * quantity;
  priceElement.innerText = totalPrice.toFixed(2);
}

