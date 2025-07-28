import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CustomerCard from './CustomerCard';
import CustomerSearch from './CustomerSearch';
import styles from './CustomerList.module.css';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/customers');
        setCustomers(response.data);
        setFilteredCustomers(response.data);
      } catch (err) {
        setError('Failed to fetch customers');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = customers.filter(customer =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filtered);
  };

  if (loading) return <div className={styles.loading}>Loading customers...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Customer Management</h2>
        <Link to="/customers/new" className={styles.addButton}>
          Add New Customer
        </Link>
      </div>
      
      <CustomerSearch onSearch={handleSearch} />
      
      <div className={styles.customerGrid}>
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map(customer => (
            <CustomerCard key={customer.id} customer={customer} />
          ))
        ) : (
          <div className={styles.noResults}>No customers found</div>
        )}
      </div>
    </div>
  );
};

export default CustomerList;
