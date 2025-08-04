   import axios from 'axios';

   const API_URL = 'http://localhost:8080/api/auth';

   export const login = async (email, password) => {
     const response = await axios.post(`${API_URL}/login`, { email, password });
     // Handle token storage or user state here
     return response.data;
   };

   export const register = async (email, password) => {
     const response = await axios.post(`${API_URL}/register`, { email, password });
     return response.data;
   };
   