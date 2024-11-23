// CartSidebar.js (React Component)
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../store/cartSlice'; // Make sure you have this action
import './CartSidebar.css';

const CartSidebar = ({ isActive, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items); // Adjust this based on your state structure
  const dispatch = useDispatch();

  // Calculate the total amount outside of any function
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id)); // Make sure your remove action uses the correct identifier
  };

  return (
    <>
      {/* Overlay */}
      <div className={`cart-sidebar-overlay ${isActive ? 'is-active' : ''}`} onClick={onClose}></div>

      {/* Sidebar */}
      <div className={`cart-sidebar ${isActive ? 'is-active' : ''}`}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name.length > 15 ? `${item.name.substring(0, 15)}...` : item.name}</h3>
                  <p>${item.price} <span style={{ textDecoration: 'line-through', color: 'gray' }}>${item.originalPrice}</span></p>
                </div>
                <button className="remove-btn" onClick={() => handleRemove(item)}>Remove</button>
              </li>
            ))
          ) : (
            <li>No items in the cart.</li>
          )}
        </ul>

        <div className="total-container">
          <h3>Total: ${totalAmount}</h3>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
