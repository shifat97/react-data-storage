import { useState, useEffect } from "react";
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { setLocalStorage, getStoredCart, removeItemFromLS } from "../Utilities/local.storage";
import Cart from "../Cart/Cart";

function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  // Load bottle data
  useEffect(() => {
    fetch('bottles.json')
      .then(response => response.json())
      .then(data => setBottles(data));
  }, []);

  // Load cart data
  useEffect(() => {
    // Get cart items from local storage
    const cartItems = getStoredCart();
    const foundedItems = [];
    cartItems.forEach(itemId => {
      // Check if itemId is on bottle data
      const item = bottles.find(bottle => bottle.id === itemId);
      // If item is found, then save it to foundedItems
      if (item) {
        foundedItems.push(item);
      }
    })
    // Change the state of cart with foundedData
    setCart(foundedItems);
  }, [bottles]); // Get cart items after loading bottle data

  // Set bottle to cart
  const handleAddToCart = bottle => {
    // Check if bottle already in the cart or storage
    const cartItems = getStoredCart();
    const isItemInCart = cartItems.find(item => item === bottle.id);
    // Return if duplicate bottle found
    if (isItemInCart) {
      alert(`${bottle.name} already in the cart.`);
      return;
    }
    // Make a copy of previous item with new item
    const item = [...cart, bottle];
    // Change the state with new cart items
    setCart(item);
    // Add item to local storage
    setLocalStorage(bottle.id);
  }

  // Handle remove items
  const handleRemoveItem = itemId => {
    // Remove item from UI
    const filteredItem = cart.filter(bottle => bottle.id !== itemId);
    setCart(filteredItem);
    // Remove item from local storage
    removeItemFromLS(itemId);
  }

  return (
    <div>
      <div className="cart">
        {
          // Show all cart item to list
          cart.map(item => <Cart key={item.id} item={item} handleRemoveItem={handleRemoveItem}></Cart>)
        }
      </div>
      <div className='bottles'>
        {
          bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
        }
      </div>
    </div>
  )
}

export default Bottles;