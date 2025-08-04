import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserPage() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:8080/users');
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/users', newUser);
    setNewUser({ name: '', email: '' });
    fetchUsers();
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleChange} className="form-control mb-2" />
        <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleChange} className="form-control mb-2" />
        <button type="submit" className="btn btn-info">Add User</button>
      </form>

      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
