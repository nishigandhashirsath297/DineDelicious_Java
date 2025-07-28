import React, { useState } from 'react';
import styles from './CustomerSearch.module.css';

const CustomerSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search customers..."
        value={searchTerm}
        onChange={handleChange}
        className={styles.searchInput}
      />
    </div>
  );
};

export default CustomerSearch;
