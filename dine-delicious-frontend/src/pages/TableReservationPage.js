import React, { useState } from 'react';
import axios from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

const TableReservationPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token'); // ⬅️ JWT Token

    if (!userId || !token) {
      alert('User not logged in!');
      navigate('/login');
      return;
    }

    try {
      const response = await axios.post(
        '/api/bookings', // ✅ corrected URL
        {
          userId: parseInt(userId),
          bookingTime: `${date}T${time}`,
          status: 'PENDING',
          numberOfGuests: guestCount,
          requestedAmenities: note ? [note] : []
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Add token in header
            'Content-Type': 'application/json'
          }
        }
      );

      alert('✅ Reservation successful!');
      navigate('/booking');

    } catch (error) {
      console.error('❌ Reservation failed:', error.response || error.message || error);
      alert('Reservation failed. Please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleReservation} className="mt-3">
        <div className="mb-3">
          <label>Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Time:</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Number of Guests:</label>
          <input
            type="number"
            className="form-control"
            min="1"
            value={guestCount}
            onChange={(e) => setGuestCount(parseInt(e.target.value))}
            required
          />
        </div>

        <div className="mb-3">
          <label>Note / Special Requests (optional):</label>
          <textarea
            className="form-control"
            rows="2"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Reserve Table</button>
      </form>
    </div>
  );
};

export default TableReservationPage;
