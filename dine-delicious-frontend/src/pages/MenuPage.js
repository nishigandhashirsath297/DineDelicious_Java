import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button, ButtonGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { GiMeat, GiBroccoli } from 'react-icons/gi';
import './MenuPage.css'; // Assume you created this custom CSS file

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    {
      name: 'Choco Lava Cake',
      category: 'Desserts',
      type: 'veg',
      description: 'Warm chocolate cake with molten center.',
      image: '/images/ChocoLavaCake.jpg',
      price: '₹149',
    },
    {
      name: 'Pasta Alfredo',
      category: 'Main Course',
      type: 'veg',
      description: 'Creamy Alfredo pasta with herbs and cheese.',
      image: '/images/PastaAlfredo.jpg',
      price: '₹229',
    },
    {
      name: 'Pizza Margherita',
      category: 'Main Course',
      type: 'veg',
      description: 'Classic pizza with cheese, tomato, and basil.',
      image: '/images/PizzaMargherita.jpg',
      price: '₹199',
    },
    {
      name: 'Veggie Burger',
      category: 'Snacks',
      type: 'veg',
      description: 'Juicy vegetarian patty with fresh toppings.',
      image: '/images/VeggieBurger.jpg',
      price: '₹179',
    },
    {
      name: 'Chicken Tikka',
      category: 'Main Course',
      type: 'non-veg',
      description: 'Spicy grilled chicken chunks with herbs.',
      image: '/images/ChickenTikka.jpg',
      price: '₹249',
    },
  ];

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = menuItems.filter(item => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchType = selectedType === 'All' || item.type === selectedType;
    return matchCategory && matchType;
  });

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fancy-heading">Our Menu</h2>

      <div className="mb-4 text-center">
        <select
          className="form-select w-50 mx-auto mb-3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <ButtonGroup>
          <Button
            variant={selectedType === 'All' ? 'primary' : 'outline-primary'}
            onClick={() => setSelectedType('All')}
          >
            All
          </Button>
          <Button
            variant={selectedType === 'veg' ? 'success' : 'outline-success'}
            onClick={() => setSelectedType('veg')}
          >
            <GiBroccoli className="me-1" /> Veg
          </Button>
          <Button
            variant={selectedType === 'non-veg' ? 'danger' : 'outline-danger'}
            onClick={() => setSelectedType('non-veg')}
          >
            <GiMeat className="me-1" /> Non-Veg
          </Button>
        </ButtonGroup>
      </div>

      <Row>
        {filteredItems.map((item, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Card className="h-100 menu-card">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold">{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">
                        {item.category} | {item.type === 'veg' ? <GiBroccoli className="text-success" /> : <GiMeat className="text-danger" />}
                      </span>
                      <h5 className="text-dark fw-bold">{item.price}</h5>
                    </div>
                  </div>
                  <Button
                    variant="success"
                    className="mt-3 order-btn"
                    onClick={() => handleOrderClick(item)}
                  >
                    Order Now
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        {selectedItem && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="img-fluid mb-3"
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
              <p>{selectedItem.description}</p>
              <h5>{selectedItem.price}</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  alert(`Order confirmed for ${selectedItem.name}`);
                  handleCloseModal();
                }}
              >
                Confirm Order
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default MenuPage;
