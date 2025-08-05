// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import TableReservationPage from './pages/TableReservationPage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import NotFoundPage from './pages/NotFoundPage';
import AdminMenuManager from './pages/AdminMenuManager';
import BillingPage from './pages/BillingPage';
import PaymentPage from './pages/PaymentPage';
import OrderSummary from './pages/OrderSummary';
import MyPayments from './pages/MyPayments';
import AllPaymentsAdmin from './pages/AllPaymentsAdmin';
import { CartProvider } from './context/CartContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CartProvider> {}
      <Router>
        <Header />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reserve" element={<TableReservationPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/menu" element={<AdminMenuManager />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order-summary" element={<OrderSummary />} />
            <Route path="/my-payments" element={<MyPayments />} />
            <Route path="/admin/payments" element={<AllPaymentsAdmin />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
