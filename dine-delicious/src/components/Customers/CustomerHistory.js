import React from 'react';

const CustomerHistory = () => {
 
  const historyData = [
    {
      id: 1,
      date: '2023-10-01',
      order: 'Order #123',
      amount: '$25.00',
      status: 'Completed'
    },
    {
      id: 2,
      date: '2023-10-05',
      order: 'Order #124',
      amount: '$30.00',
      status: 'Completed'
    },
    {
      id: 3,
      date: '2023-10-10',
      order: 'Order #125',
      amount: '$20.00',
      status: 'Pending'
    }
  ];

  return (
    <div>
      <h2>Customer History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Order</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map(item => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.order}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerHistory;
