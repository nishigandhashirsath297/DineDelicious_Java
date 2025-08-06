// src/pages/OrderSummary.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const order = location.state?.order;

  if (!order) {
    return (
      <div className="container mt-5 text-center">
        <h4>No order details found.</h4>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-success mb-4 text-center">🎉 Order Placed Successfully!</h2>

        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Total Amount:</strong> ₹{order.totalAmount?.toFixed(2)}</p>
        <p><strong>Status:</strong> {order.status || 'Confirmed'}</p>
        <p><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>

        <hr />
        <h5>Ordered Items:</h5>
        <ul className="list-group">
          {order.items?.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <span>{item.menuItemName || `Item #${item.menuItemId}`}</span>
              <span>Qty: {item.quantity}</span>
            </li>
          ))}
        </ul>

        <button className="btn btn-primary mt-4 w-100" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
