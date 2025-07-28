import React from 'react';
import styles from './CustomerCard.module.css';

const CustomerCard = ({ customer, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{customer.name}</h3>
        <span className={`${styles.status} ${customer.isActive ? styles.active : styles.inactive}`}>
          {customer.isActive ? 'Active' : 'Inactive'}
        </span>
      </div>
      <div className={styles.body}>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Visits:</strong> {customer.visitCount}</p>
        <p><strong>Last Visit:</strong> {new Date(customer.lastVisit).toLocaleDateString()}</p>
      </div>
      <div className={styles.footer}>
        <button onClick={() => onEdit(customer)} className={styles.editBtn}>
          Edit
        </button>
        <button onClick={() => onDelete(customer.id)} className={styles.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CustomerCard;
