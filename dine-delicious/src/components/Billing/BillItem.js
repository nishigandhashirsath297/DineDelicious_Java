import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BillItem.module.css';

const BillItem = ({ bill }) => {
  const getStatusClass = (status) => {
    return `${styles.status} ${styles[status]}`;
  };

  return (
    <div className={styles.billItem}>
      <Link to={`/bills/${bill.id}`} className={styles.billLink}>
        <span>{bill.id}</span>
        <span>{bill.customerName}</span>
        <span>${bill.totalAmount.toFixed(2)}</span>
        <span className={getStatusClass(bill.status)}>{bill.status}</span>
        <span>{new Date(bill.createdAt).toLocaleDateString()}</span>
      </Link>
      <div className={styles.actions}>
        <Link to={`/bills/${bill.id}/print`} className={styles.printButton}>
          Print
        </Link>
        {bill.status === 'unpaid' && (
          <button className={styles.payButton}>Mark Paid</button>
        )}
      </div>
    </div>
  );
};

export default BillItem;
