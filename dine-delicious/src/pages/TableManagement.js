import React, { useState, useEffect } from 'react';

function TableManagement() {
  const [tables, setTables] = useState([]);
  const [newTable, setNewTable] = useState({
    number: '',
    capacity: '2',
    status: 'available'
  });

  useEffect(() => {
    const fetchTables = async () => {
      
      const mockTables = [
        { id: 1, number: 1, capacity: 4, status: 'occupied', customer: 'John Doe' },
        { id: 2, number: 2, capacity: 6, status: 'available', customer: null }
      ];
      setTables(mockTables);
    };
    fetchTables();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTable(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTable = (e) => {
    e.preventDefault();
    const id = Math.max(...tables.map(table => table.id), 0) + 1;
    setTables([...tables, { ...newTable, id }]);
    setNewTable({ number: '', capacity: '2', status: 'available' });
  };

  const handleTableStatus = (id, newStatus) => {
    setTables(tables.map(table => 
      table.id === id ? { ...table, status: newStatus } : table
    ));
  };

  return (
    <div className="table-management">
      <h2>Table Management</h2>
      <form onSubmit={handleAddTable} className="table-form">
        <div className="form-group">
          <label>Table Number:</label>
          <input
            type="number"
            name="number"
            value={newTable.number}
            onChange={handleInputChange}
            required
            min="1"
          />
        </div>
        <div className="form-group">
          <label>Capacity:</label>
          <select
            name="capacity"
            value={newTable.capacity}
            onChange={handleInputChange}
          >
            <option value="2">2 people</option>
            <option value="4">4 people</option>
            <option value="6">6 people</option>
            <option value="8">8+ people</option>
          </select>
        </div>
        <button type="submit">Add Table</button>
      </form>

      <div className="tables-grid">
        {tables.map(table => (
          <div key={table.id} className={`table-card ${table.status}`}>
            <div className="table-header">
              <h3>Table {table.number}</h3>
              <span className={`status-badge ${table.status}`}>
                {table.status}
              </span>
            </div>
            <p>Capacity: {table.capacity} people</p>
            {table.status === 'occupied' && (
              <p>Customer: {table.customer}</p>
            )}
            <div className="table-actions">
              {table.status === 'available' && (
                <button onClick={() => handleTableStatus(table.id, 'occupied')}>
                  Mark as Occupied
                </button>
              )}
              {table.status === 'occupied' && (
                <button onClick={() => handleTableStatus(table.id, 'available')}>
                  Mark as Available
                </button>
              )}
              <button className="edit-btn">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableManagement;
