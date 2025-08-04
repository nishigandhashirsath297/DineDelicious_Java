// src/pages/BillingPage.js

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

const dummyBills = [
  {
    id: 1,
    tableNumber: 'T101',
    date: '2025-08-04',
    totalAmount: 1345,
    items: [
      { name: 'Pizza Margherita', quantity: 2, price: 250 },
      { name: 'Pasta Alfredo', quantity: 1, price: 300 },
    ],
  },
  {
    id: 2,
    tableNumber: 'T102',
    date: '2025-08-03',
    totalAmount: 780,
    items: [
      { name: 'Veggie Burger', quantity: 2, price: 180 },
      { name: 'Choco Lava Cake', quantity: 1, price: 200 },
    ],
  },
];

const BillingPage = () => {
  const [bills, setBills] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    // replace this with API call later
    setBills(dummyBills);
  }, []);

  const handleView = (bill) => {
    setSelectedBill(bill);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedBill(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Billing History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Bill ID</th>
            <th>Table</th>
            <th>Date</th>
            <th>Total (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.tableNumber}</td>
              <td>{bill.date}</td>
              <td>{bill.totalAmount}</td>
              <td>
                <Button variant="info" size="sm" onClick={() => handleView(bill)}>
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Bill Details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bill #{selectedBill?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Table:</strong> {selectedBill?.tableNumber}</p>
          <p><strong>Date:</strong> {selectedBill?.date}</p>
          <h5>Items:</h5>
          <ul>
            {selectedBill?.items.map((item, idx) => (
              <li key={idx}>
                {item.name} x {item.quantity} — ₹{item.price}
              </li>
            ))}
          </ul>
          <h5>Total: ₹{selectedBill?.totalAmount}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={() => window.print()}>Print</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BillingPage;
