import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import InvoiceTemplate from './InvoiceTemplate';
import styles from './InvoiceTemplate.module.css';

const InvoicePrinter = ({ bill }) => {
  const componentRef = useRef();
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page { size: auto; margin: 5mm; }
      @media print {
        body { -webkit-print-color-adjust: exact; }
      }
    `,
    documentTitle: `Invoice_${bill?.id}`
  });

  return (
    <div className={styles.printContainer}>
      <button 
        onClick={handlePrint}
        className={styles.printButton}
      >
        Print Invoice
      </button>
      <InvoiceTemplate ref={componentRef} bill={bill} />
    </div>
  );
};

export default InvoicePrinter;
