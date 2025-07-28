import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Change App.js import to:
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import MenuManagement from './pages/MenuManagement';
import TableManagement from './pages/TableManagement';
import OrderManagement from './pages/OrderManagement';
import BillList from './components/Billing/BillList';
import CustomerManagement from './pages/CustomerManagement';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<MenuManagement />} />
        <Route path="/tables" element={<TableManagement />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/bills" element={<BillList />} />
        <Route path="/customers" element={<CustomerManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
