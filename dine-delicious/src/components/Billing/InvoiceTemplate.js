import React from 'react';
import { useReactToPrint } from 'react-to-print';
import styles from './InvoiceTemplate.module.css';

const InvoiceTemplate = React.forwardRef(({ bill }, ref) => {
  return (
    <div className={styles.invoiceContainer} ref={ref}>
      <div className={styles.invoiceHeader}>
        <div className={styles.logo}>
          <h2>Dine Delicious</h2>
          <p>123 Restaurant Street, Food City</p>
        </div>
        <div className={styles.invoiceInfo}>
          <h3>INVOICE</h3>
          <p>No: {bill?.id}</p>
          <p>Date: {new Date(bill?.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <div className={styles.customerInfo}>
        <div>
          <strong>Customer:</strong> {bill?.customerName}
        </div>
        <div>
          <strong>Table No:</strong> {bill?.tableNumber}
        </div>
      </div>

      <div className={styles.itemsTable}>
        <div className={styles.tableHeader}>
          <div className={styles.colDescription}>Description</div>
          <div className={styles.colQty}>Qty</div>
          <div className={styles.colPrice}>Price</div>
          <div className={styles.colTotal}>Total</div>
        </div>
        {bill?.items?.map((item, index) => (
          <div key={index} className={styles.tableRow}>
            <div className={styles.colDescription}>{item.name}</div>
            <div className={styles.colQty}>{item.quantity}</div>
            <div className={styles.colPrice}>${item.price.toFixed(2)}</div>
            <div className={styles.colTotal}>${(item.quantity * item.price).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className={styles.totals}>
        <div className={styles.totalRow}>
          <span>Subtotal:</span>
          <span>${bill?.subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.totalRow}>
          <span>Tax ({bill?.taxRate}%):</span>
          <span>${bill?.tax.toFixed(2)}</span>
        </div>
        {bill?.discount > 0 && (
          <div className={styles.totalRow}>
            <span>Discount:</span>
            <span>-${bill?.discount.toFixed(2)}</span>
          </div>
        )}
        <div className={styles.grandTotal}>
          <span>TOTAL:</span>
          <span>${bill?.totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <p>Thank you for dining with us!</p>
        <p>For inquiries: contact@dinedelicious.com | (123) 456-7890</p>
      </div>

      <div className={styles.statusBadge}>
        {bill?.status === 'paid' ? 'PAID' : 'PENDING'}
      </div>
    </div>
  );
});

export default InvoiceTemplate;
