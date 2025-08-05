// src/pages/CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Save cart to session/local storage or send to backend
    console.log('Order Placed:', cartItems);
    clearCart();
    navigate('/billing');
  };

  return (
    <div className="container mt-4">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  {item.name} - ₹{item.price}
                  <br />
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="form-control form-control-sm mt-1"
                    style={{ width: '60px' }}
                  />
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h5>Total: ₹{total}</h5>
          <button className="btn btn-primary" onClick={handleCheckout}>Proceed to Billing</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
