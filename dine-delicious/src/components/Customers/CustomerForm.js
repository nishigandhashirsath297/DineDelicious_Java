import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './CustomerForm.module.css';

const CustomerForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'active'
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      const fetchCustomer = async () => {
        try {
          const response = await axios.get(`/api/customers/${id}`);
          setCustomer(response.data);
        } catch (err) {
          console.error("Failed to fetch customer", err);
        }
      };
      fetchCustomer();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const tempErrors = {};
    if (!customer.name) tempErrors.name = 'Name is required';
    if (!customer.email) tempErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) {
      tempErrors.email = 'Email is not valid';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (id) {
        await axios.put(`/api/customers/${id}`, customer);
      } else {
        await axios.post('/api/customers', customer);
      }
      navigate('/customers');
    } catch (err) {
      console.error("Failed to save customer", err);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>{id ? 'Edit Customer' : 'Add New Customer'}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Status</label>
          <select
            name="status"
            value={customer.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" onClick={() => navigate('/customers')}>
            Cancel
          </button>
          <button type="submit">
            {id ? 'Update' : 'Save'} Customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
