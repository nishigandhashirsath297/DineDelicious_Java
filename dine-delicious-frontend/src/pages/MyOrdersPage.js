import React, { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('/orders/user');
        setOrders(res.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>You have not placed any orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Order #{order.id}</h5>
              <p>Status: <strong>{order.status}</strong></p>
              <p>Placed On: {new Date(order.createdAt).toLocaleString()}</p>
              <p>Total Amount: ₹{order.totalAmount.toFixed(2)}</p>
              <ul className="list-group list-group-flush">
                {order.items.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item.menuItemName} × {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrdersPage;
