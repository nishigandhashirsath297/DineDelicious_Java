import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BillList from './BillList';
import { fetchBills } from '../../services/billingService';
import styles from './Billing.module.css';

const Billing = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBills = async () => {
      try {
        const data = await fetchBills();
        setBills(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadBills();
  }, []);

  return (
    <div className={styles.billingContainer}>
      <div className={styles.header}>
        <h2>Billing Dashboard</h2>
        <Link to="/bills/new" className={styles.newBillButton}>
          Create New Bill
        </Link>
      </div>
      {loading ? (
        <div className={styles.loading}>Loading bills...</div>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <BillList bills={bills} />
      )}
    </div>
  );
};

export default Billing;
