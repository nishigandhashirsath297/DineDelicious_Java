// src/api/axiosInstance.js

import axios from '../api/axiosInstance';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:9090/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
