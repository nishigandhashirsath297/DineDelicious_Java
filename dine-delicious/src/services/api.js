   import axios from 'axios';
   import Navbar from './components/Navbar/Navbar';
   const API_URL = 'http://localhost:8080/api'; // Adjust based on your backend URL

   export const fetchMenuItems = () => axios.get(`${API_URL}/menu`);
   export const fetchTables = () => axios.get(`${API_URL}/tables`);
   export const fetchOrders = () => axios.get(`${API_URL}/orders`);
   export const fetchCustomers = () => axios.get(`${API_URL}/customers`);
   