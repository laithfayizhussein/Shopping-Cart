/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  let cart = document.getElementById('cart');
  let data = JSON.parse(localStorage.getItem('cart'));
  for (let i = 0; i < data.length; i++) {

    const trEle = document.createElement('tr');
    cart.appendChild(trEle);
    //   let new_tbody = document.createElement('td');
    // populate_with_new_rows(new_tbody);
    // old_tbody.parentNode.replaceChild(new_tbody, old_tbody)

    const tdEle3 = document.createElement('td');
    trEle.appendChild(tdEle3);
    tdEle3.textContent = ` X `;

    const tdEle2 = document.createElement('td');
    trEle.appendChild(tdEle2);
    tdEle2.textContent = ` ${data[i].quantity}`;

    const tdEle = document.createElement('td');
    trEle.appendChild(tdEle);
    tdEle.textContent = ` ${data[i].product}`;


  }
}


function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
