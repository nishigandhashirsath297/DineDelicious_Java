// src/pages/AllPaymentsAdmin.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllPaymentsAdmin = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/payments/all')
      .then(response => setPayments(response.data))
      .catch(error => console.error('Error fetching all payments:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">All Payments (Admin View)</h2>
      {payments.length === 0 ? (
        <p>No payments available.</p>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Amount</th>
              <th>Mode</th>
              <th>Status</th>
              <th>Paid At</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment.id}>
                <td>{index + 1}</td>
                <td>{payment.user?.name || 'N/A'}</td>
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

export default AllPaymentsAdmin;
