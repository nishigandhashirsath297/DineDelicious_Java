import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BillItem from '../Billing/BillItem'; 
function BillList() {
  const [bills, setBills] = useState([]);
  const [filter, setFilter] = useState({
    status: 'all',
    startDate: '',
    endDate: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch bills from API
  useEffect(() => {
    const fetchBills = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/bills'); // Example endpoint
        setBills(response.data);
      } catch (err) {
        setError('Failed to fetch bills');
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  const handleBillClick = (billId) => {
    navigate(`/bills/${billId}`); // Navigate to the bill details page
  };

  if (loading) return <div>Loading bills...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bill-list">
      <h2>Billing List</h2>
      <div className="filter-controls">
        {/* Add filter controls here if needed */}
      </div>
      <div className="bills">
        {bills.length > 0 ? (
          bills.map(bill => (
            <BillItem key={bill.id} bill={bill} onClick={handleBillClick} />
          ))
        ) : (
          <p>No bills found.</p>
        )}
      </div>
    </div>
  );
}

export default BillList;
