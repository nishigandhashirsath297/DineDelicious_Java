import React, { useState } from 'react';
import styles from './PaymentModal.module.css';

const PaymentModal = ({ bill, onClose, onPaymentComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [amount, setAmount] = useState(bill?.totalAmount?.toFixed(2) || '');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      onPaymentComplete({
        billId: bill.id,
        amount: parseFloat(amount),
        method: paymentMethod
      });
      onClose();
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <h2>Process Payment for Bill #{bill?.id}</h2>
        
        <div className={styles.paymentSummary}>
          <p>Amount Due: <span>${bill?.totalAmount?.toFixed(2)}</span></p>
          <p>Customer: {bill?.customerName}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          <div className={styles.formGroup}>
            <label>Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="cash">Cash</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Amount Received</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0.01"
              max={bill?.totalAmount}
              step="0.01"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Payment Reference</label>
            <input
              type="text"
              placeholder="Optional reference number"
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.buttonGroup}>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={processing}
              className={styles.submitButton}
            >
              {processing ? 'Processing...' : 'Complete Payment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
