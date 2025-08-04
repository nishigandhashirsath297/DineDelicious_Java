import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Form, Modal } from 'react-bootstrap';

const initialMenuItems = [
  {
    id: 1,
    name: 'Choco Lava Cake',
    description: 'Delicious molten chocolate dessert.',
    price: 150,
    category: 'Dessert',
    imageUrl: '/images/ChocoLavaCake.jpeg',
  },
  {
    id: 2,
    name: 'Pasta Alfredo',
    description: 'Creamy pasta with Alfredo sauce.',
    price: 200,
    category: 'Main Course',
    imageUrl: '/images/PatsAlfredo.jpeg',
  },
];

function AdminMenuManager() {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
  });

  const handleShowForm = (item = null) => {
    setEditingItem(item);
    setFormData(item || { name: '', description: '', price: '', category: '', imageUrl: '' });
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingItem(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      setMenuItems((prev) =>
        prev.map((item) =>
          item.id === editingItem.id ? { ...item, ...formData, price: parseFloat(formData.price) } : item
        )
      );
    } else {
      const newItem = {
        ...formData,
        id: Date.now(),
        price: parseFloat(formData.price),
      };
      setMenuItems((prev) => [...prev, newItem]);
    }
    handleCloseForm();
  };

  const handleDelete = (id) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h2 className="mb-4">Manage Menu Items</h2>
          <Button variant="success" onClick={() => handleShowForm()} className="mb-3">
            Add New Item
          </Button>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price (₹)</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <Button variant="warning" size="sm" className="me-2" onClick={() => handleShowForm(item)}>
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>{editingItem ? 'Edit Menu Item' : 'Add Menu Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={formData.name} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" value={formData.description} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control name="category" value={formData.category} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL (relative to /public)</Form.Label>
              <Form.Control name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} required />
              <Form.Text muted>Example: /images/PizzaMargherita.jpeg</Form.Text>
            </Form.Group>
            <Button type="submit" variant="primary">
              {editingItem ? 'Update Item' : 'Add Item'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default AdminMenuManager;
