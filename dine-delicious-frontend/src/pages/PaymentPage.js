// src/pages/PaymentPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(500); // Placeholder amount, ideally set via props/state
  const [paymentMode, setPaymentMode] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('PENDING');

  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentData = {
      amount,
      mode: paymentMode,
      status: paymentStatus,
      paidAt: new Date().toISOString()
    };

    console.log('Payment Submitted:', paymentData);

    // TODO: Send to backend
    // axios.post('/api/payments', paymentData)

    alert('Payment Successful!');
    navigate('/order-summary');
  };

  return (
    <div className="container mt-5 col-md-6">
      <h2 className="mb-4 text-center">Make a Payment</h2>

      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">

        {/* Amount Field */}
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount (₹)</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            value={amount}
            disabled
          />
        </div>

        {/* Payment Mode Dropdown */}
        <div className="mb-3">
          <label htmlFor="paymentMode" className="form-label">Payment Mode</label>
          <select
            id="paymentMode"
            className="form-select"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
            required
          >
            <option value="">-- Select Payment Mode --</option>
            <option value="CASH">Cash</option>
            <option value="CARD">Credit / Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="NET_BANKING">Net Banking</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
