import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [stats, setStats] = useState({
    activeTables: 0,
    pendingOrders: 0,
    todayRevenue: 0
  });

  
  useEffect(() => {
    const fetchStats = async () => {
      setStats({
        activeTables: 12,
        pendingOrders: 8,
        todayRevenue: 2435.50
      });
    };
    fetchStats();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Restaurant Dashboard</h2>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Active Tables</h3>
          <p>{stats.activeTables}</p>
          <Link to="/tables">View All</Link>
        </div>
        <div className="stat-card">
          <h3>Pending Orders</h3>
          <p>{stats.pendingOrders}</p>
          <Link to="/orders">View All</Link>
        </div>
        <div className="stat-card">
          <h3>Today's Revenue</h3>
          <p>${stats.todayRevenue.toFixed(2)}</p>
          <Link to="/bills">View Bills</Link>
        </div>
      </div>
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button><Link to="/menu">Add Menu Item</Link></button>
          <button><Link to="/reservations">Add Reservation</Link></button>
          <button><Link to="/customers">Add Customer</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
