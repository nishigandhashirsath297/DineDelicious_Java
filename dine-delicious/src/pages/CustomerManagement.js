import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CustomerManagement() {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

 
  useEffect(() => {
    const fetchCustomers = async () => {
     
      const mockCustomers = [
        { id: 1, name: 'Nishigandha', email: 'nishigandha@gmail.com', phone: '9999444490', visits: 5 },
        { id: 2, name: 'Dipti', email: 'dipti@gmail.com', phone: '9023904123', visits: 3 }
      ];
      setCustomers(mockCustomers);
    };
    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="management-container">
      <h2>Customer Management</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Visits</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.visits}</td>
                <td>
                  <Link to={`/customers/${customer.id}`} className="edit-btn">Edit</Link>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-btn">
        <Link to="/customers/new">Add New Customer</Link>
      </button>
    </div>
  );
}

export default CustomerManagement;
