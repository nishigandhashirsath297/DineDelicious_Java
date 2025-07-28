import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const fetchOrders = async () => {
      const mockOrders = [
        { id: 1, tableNumber: 1, items: ['Pizza', 'Salad'], status: 'pending', time: '2023-05-15T18:30:00' },
        { id: 2, tableNumber: 5, items: ['Pasta', 'Garlic Bread'], status: 'completed', time: '2023-05-15T19:15:00' }
      ];
      setOrders(mockOrders);
    };
    fetchOrders();
  }, []);

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="order-management">
      <h2>Order Management</h2>
      <div className="order-controls">
        <select 
          value={statusFilter} 
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Orders</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button>
          <Link to="/orders/new">Create New Order</Link>
        </button>
      </div>
      <div className="order-list">
        {filteredOrders.map(order => (
          <div key={order.id} className={`order-card ${order.status}`}>
            <div className="order-header">
              <h3>Table {order.tableNumber}</h3>
              <span className={`status-badge ${order.status}`}>
                {order.status}
              </span>
            </div>
            <div className="order-items">
              <h4>Items:</h4>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="order-footer">
              <p>Order Time: {new Date(order.time).toLocaleTimeString()}</p>
              <div className="order-actions">
                {order.status === 'pending' && (
                  <button onClick={() => updateOrderStatus(order.id, 'in-progress')}>
                    Start Preparing
                  </button>
                )}
                {order.status === 'in-progress' && (
                  <button onClick={() => updateOrderStatus(order.id, 'completed')}>
                    Mark as Completed
                  </button>
                )}
                <button className="view-btn">
                  <Link to={`/orders/${order.id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderManagement;
