// src/pages/CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tableId = localStorage.getItem('tableId') || 1; // default to table 1 if not set

      if (!userId) {
        alert('User not logged in.');
        return;
      }

      const orderItems = cartItems.map(item => ({
        menuItemId: item.id,
        quantity: item.quantity,
      }));

      const response = await axios.post('/orders', {
        userId: parseInt(userId),
        tableId: parseInt(tableId),
        items: orderItems,
      });

      console.log('Order placed successfully:', response.data);

      clearCart();
      navigate('/order-summary', { state: { order: response.data } });
    } catch (error) {
      console.error('Order placement failed:', error);
      alert('Failed to place order. Please try again.');
    }
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
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h5>Total: ₹{total.toFixed(2)}</h5>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Proceed to Billing
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
