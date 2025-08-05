// src/pages/OrderSummary.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const paymentInfo = location.state?.payment;

  if (!paymentInfo) {
    return (
      <div className="container mt-5 text-center">
        <h4>No payment details found.</h4>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-success mb-4 text-center">🎉 Payment Successful!</h2>
        <p><strong>Amount Paid:</strong> ₹{paymentInfo.amount}</p>
        <p><strong>Payment Mode:</strong> {paymentInfo.mode}</p>
        <p><strong>Status:</strong> {paymentInfo.status}</p>
        <p><strong>Date:</strong> {new Date(paymentInfo.paidAt).toLocaleString()}</p>

        <button className="btn btn-primary mt-4 w-100" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
