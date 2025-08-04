import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

// Dummy data for available slots (you can enhance this later)
const dummySlots = [
  { id: 1, time: '12:00 PM - 1:00 PM', available: true },
  { id: 2, time: '1:00 PM - 2:00 PM', available: true },
  { id: 3, time: '2:00 PM - 3:00 PM', available: false },
  { id: 4, time: '7:00 PM - 8:00 PM', available: true },
];

const BookingPage = () => {
  const [form, setForm] = useState({
    name: '',
    guests: '',
    slotId: '',
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const selectedSlot = dummySlots.find((slot) => slot.id === parseInt(form.slotId));

    if (selectedSlot && selectedSlot.available) {
      setMessage(`Booking confirmed for ${form.name} at ${selectedSlot.time} for ${form.guests} guests.`);
      setForm({ name: '', guests: '', slotId: '' });
    } else {
      setMessage('Selected slot is not available. Please choose another slot.');
    }
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Book a Table</h2>

      {message && <Alert variant="info">{message}</Alert>}

      <Form onSubmit={handleBooking}>
        <Form.Group className="mb-3" controlId="bookingName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="guests">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
            type="number"
            placeholder="e.g. 2"
            name="guests"
            value={form.guests}
            onChange={handleInputChange}
            min="1"
            max="20"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="slot">
          <Form.Label>Select Time Slot</Form.Label>
          <Form.Select
            name="slotId"
            value={form.slotId}
            onChange={handleInputChange}
            required
          >
            <option value="">-- Select Slot --</option>
            {dummySlots
              .filter((slot) => slot.available)
              .map((slot) => (
                <option key={slot.id} value={slot.id}>
                  {slot.time}
                </option>
              ))}
          </Form.Select>
        </Form.Group>

        <Button variant="success" type="submit">
          Confirm Booking
        </Button>
      </Form>

      <hr className="my-5" />

      <h4>Available Time Slots</h4>
      <Row>
        {dummySlots.map((slot) => (
          <Col md={4} key={slot.id} className="mb-3">
            <div
              className={`p-3 border rounded ${
                !slot.available ? 'bg-light text-muted' : ''
              }`}
            >
              <strong>{slot.time}</strong>
              <p>Status: {slot.available ? 'Available' : 'Booked'}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookingPage;
