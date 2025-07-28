import React, { useState, useEffect } from 'react';

function MenuManagement() {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    category: 'Main Course'
  });
  const [editMode, setEditMode] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const mockItems = [
        { id: 1, name: 'Pizza', price: 299, category: 'Main Course' },
        { id: 2, name: 'Salad', price: 199, category: 'Appetizer' }
      ];
      setMenuItems(mockItems);
    };
    fetchMenuItems();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setMenuItems(menuItems.map(item =>
        item.id === currentItemId ? { ...newItem, id: currentItemId, price: parseFloat(newItem.price) } : item
      ));
      setEditMode(false);
    } else {
      const id = Math.max(...menuItems.map(item => item.id), 0) + 1;
      setMenuItems([...menuItems, { ...newItem, id, price: parseFloat(newItem.price) }]);
    }
    setNewItem({ name: '', price: '', category: 'Main Course' });
  };

  const handleEdit = (item) => {
    setNewItem(item);
    setCurrentItemId(item.id);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const formatPriceINR = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className="menu-management">
      <h2>Menu Management</h2>
      <form onSubmit={handleSubmit} className="menu-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Price (₹):</label>
          <input
            type="number"
            name="price"
            value={newItem.price}
            onChange={handleInputChange}
            step="0.01"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            name="category"
            value={newItem.category}
            onChange={handleInputChange}
          >
            <option value="Appetizer">Appetizer</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverage">Beverage</option>
          </select>
        </div>
        <button type="submit">
          {editMode ? 'Update Item' : 'Add Item'}
        </button>
      </form>

      <div className="menu-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{formatPriceINR(item.price)}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuManagement;
