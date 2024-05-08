const getStoredCart = () => {
  // Get items from cart
  const storedCart = localStorage.getItem('cart');
  // Return if previously item available
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  // Return if cart is empty
  return [];
}

const setLocalStorage = item => {
  // Get cart items
  const cart = getStoredCart();
  // Push new item to cart
  cart.push(item);
  // Set updated cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
}

const removeItemFromLS = itemId => {
  // Get cart item from local storage
  const cartItems = getStoredCart();
  // Get items except removed item
  const filteredItems = cartItems.filter(id => id !== itemId);
  // Save the cart with updated items
  localStorage.setItem('cart', JSON.stringify(filteredItems));
}

export { setLocalStorage, getStoredCart, removeItemFromLS };