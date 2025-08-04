import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBillById, updateBillStatus } from '../../services/billingService';
import styles from './BillDetails.module.css';

import InvoicePrinter from './InvoicePrinter';

// Inside your BillDetails component's return:
<div className={styles.printSection}>
  <InvoicePrinter bill={bill} />
</div>


const BillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bill, setBill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    const fetchBillDetails = async () => {
      try {
        const data = await getBillById(id);
        setBill(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBillDetails();
  }, [id]);

  const handleMarkAsPaid = async () => {
    setIsPaying(true);
    try {
      await updateBillStatus(id, 'paid');
      setBill({...bill, status: 'paid'});
    } catch (err) {
      setError('Failed to update bill status');
    } finally {
      setIsPaying(false);
    }
  };

  if (loading) return <div className={styles.loading}>Loading bill details...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!bill) return <div className={styles.notFound}>Bill not found</div>;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.header}>
        <h2>Bill #{bill.id}</h2>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Back to List
        </button>
      </div>
      
      <div className={styles.customerInfo}>
        <h3>Customer: {bill.customerName}</h3>
        <p>Date: {new Date(bill.createdAt).toLocaleString()}</p>
        <p className={styles[bill.status]}>{bill.status.toUpperCase()}</p>
      </div>

      <div className={styles.itemsTable}>
        <div className={styles.tableHeader}>
          <span>Item</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>
        {bill.items.map((item, index) => (
          <div key={index} className={styles.tableRow}>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>${item.price.toFixed(2)}</span>
            <span>${(item.quantity * item.price).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <div className={styles.totalRow}>
          <span>Subtotal:</span>
          <span>${bill.subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.totalRow}>
          <span>Tax:</span>
          <span>${bill.tax.toFixed(2)}</span>
        </div>
        <div className={styles.totalRow}>
          <span>Discount:</span>
          <span>-${bill.discount.toFixed(2)}</span>
        </div>
        <div className={styles.totalRow}>
          <strong>Total Amount:</strong>
          <strong>${bill.totalAmount.toFixed(2)}</strong>
        </div>
      </div>

      {bill.status === 'unpaid' && (
        <div className={styles.paymentActions}>
          <button 
            onClick={handleMarkAsPaid} 
            disabled={isPaying}
            className={styles.payNowButton}
          >
            {isPaying ? 'Processing...' : 'Mark as Paid'}
          </button>
          <Link to={`/bills/${bill.id}/payment`} className={styles.paymentLink}>
            Process Payment
          </Link>
        </div>
      )}

      <div className={styles.printAction}>
        <Link to={`/bills/${bill.id}/print`} className={styles.printButton}>
          Print Bill
        </Link>
      </div>
    </div>
  );
};

export default BillDetails;
