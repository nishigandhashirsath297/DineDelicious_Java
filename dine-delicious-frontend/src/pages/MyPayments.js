// src/pages/MyPayments.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Replace 1 with dynamic userId
    axios.get('http://localhost:8080/api/payments/user/1')
      .then(response => setPayments(response.data))
      .catch(error => console.error('Error fetching payments:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Payments</h2>
      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Amount</th>
              <th>Mode</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment.id}>
                <td>{index + 1}</td>
                <td>₹{payment.amount}</td>
                <td>{payment.mode}</td>
                <td>{payment.status}</td>
                <td>{new Date(payment.paidAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyPayments;
