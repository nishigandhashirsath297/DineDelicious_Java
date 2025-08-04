import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const dummyTables = [
  { id: 1, tableNumber: 'T01', capacity: 2, category: 'Regular', status: 'Available' },
  { id: 2, tableNumber: 'T02', capacity: 4, category: 'Family', status: 'Available' },
  { id: 3, tableNumber: 'T03', capacity: 6, category: 'VIP', status: 'Booked' },
];

const TableReservationPage = () => {
  const [name, setName] = useState('');
  const [selectedTableId, setSelectedTableId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleReservation = (e) => {
    e.preventDefault();
    const reservedTable = dummyTables.find((table) => table.id === parseInt(selectedTableId));

    if (reservedTable && reservedTable.status === 'Available') {
      setSuccessMessage(`Table ${reservedTable.tableNumber} reserved successfully for ${name}!`);
      setName('');
      setSelectedTableId('');
    } else {
      setSuccessMessage(`Sorry, selected table is not available.`);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Reserve a Table</h2>

      {successMessage && <Alert variant="info">{successMessage}</Alert>}

      <Form onSubmit={handleReservation}>
        <Form.Group controlId="reservationName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="tableSelect" className="mb-3">
          <Form.Label>Select Table</Form.Label>
          <Form.Select
            value={selectedTableId}
            onChange={(e) => setSelectedTableId(e.target.value)}
            required
          >
            <option value="">-- Select Table --</option>
            {dummyTables
              .filter((table) => table.status === 'Available')
              .map((table) => (
                <option key={table.id} value={table.id}>
                  {table.tableNumber} - {table.category} (Seats: {table.capacity})
                </option>
              ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary">
          Reserve Table
        </Button>
      </Form>

      <hr className="my-5" />

      <h4 className="mb-3">All Tables</h4>
      <Row>
        {dummyTables.map((table) => (
          <Col md={4} key={table.id} className="mb-3">
            <div className={`p-3 border rounded ${table.status === 'Booked' ? 'bg-light text-muted' : ''}`}>
              <h5>Table {table.tableNumber}</h5>
              <p>Category: {table.category}</p>
              <p>Capacity: {table.capacity}</p>
              <p>Status: <strong>{table.status}</strong></p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TableReservationPage;
