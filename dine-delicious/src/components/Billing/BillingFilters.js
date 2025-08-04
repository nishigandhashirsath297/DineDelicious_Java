import React from 'react';
import styles from './BillingFilters.module.css';

const BillingFilters = ({ filters, onFilterChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterGroup}>
        <label>Status</label>
        <select
          name="status"
          value={filters.status}
          onChange={handleInputChange}
        >
          <option value="all">All Statuses</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>From Date</label>
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.filterGroup}>
        <label>To Date</label>
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleInputChange}
          min={filters.startDate}
        />
      </div>

      <div className={styles.filterGroup}>
        <label>Customer</label>
        <input
          type="text"
          name="customerName"
          placeholder="Search customers..."
          value={filters.customerName}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.filterGroup}>
        <label>Min Amount</label>
        <input
          type="number"
          name="minAmount"
          placeholder="0.00"
          min="0"
          step="0.01"
          value={filters.minAmount}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default BillingFilters;
