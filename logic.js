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
  var price = 132.2;
  var quantity = parseInt(quantityInput.value);
  var totalPrice = price * quantity;
  priceElement.innerText = totalPrice.toFixed(2);
}













// Function to generate random tracking number
function generateTrackingNumber() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let trackingNumber = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    trackingNumber += characters.charAt(randomIndex);
  }
  return trackingNumber;
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const firstName = document.getElementById('fname').value;
  const phoneNumber = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const date = document.getElementById('birthday').value;

  // Generate random tracking number
  const trackingNumber = generateTrackingNumber();

  // Store order details in local storage
  const order = { firstName, phoneNumber, email, address, date };
  localStorage.setItem(trackingNumber, JSON.stringify(order));

  // Display alert message
  alert('Your order has been placed! Tracking number: ' + trackingNumber);

  // Clear form inputs
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('address').value = '';
  document.getElementById('birthday').value = '';
}

// Event listener for form submission
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', handleFormSubmission);

// Function to search for product by tracking number
function searchProduct(trackingNumber) {
  const orderJson = localStorage.getItem(trackingNumber);
  if (orderJson) {
    const order = JSON.parse(orderJson);
    return order;
  }
  return null;
}

// Function to display product details
function displayProductDetails(order) {
  const productDetailsContainer = document.getElementById('productDetails');
  if (order) {
    const { firstName, phoneNumber, email, address, date } = order;
    const html = `
      <h2>Product Details</h2>
      <p><strong>Tracking Number:</strong> ${order.trackingNumber}</p>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Date:</strong> ${date}</p>
    `;
    productDetailsContainer.innerHTML = html;
  } else {
    productDetailsContainer.innerHTML = '<p>No product found with the provided tracking number.</p>';
  }
}

// Function to handle search button click
function handleSearch(event) {
  event.preventDefault(); // Prevent form submission
  const searchInput = document.getElementById('search');
  const trackingNumber = searchInput.value.trim();
  const order = searchProduct(trackingNumber);
  displayProductDetails(order);
  searchInput.value = '';
}

// Event listener for search button click
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', handleSearch);