// src/components/MenuCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MenuCard = ({ item, onAddToCart }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={`/images/${item.image || 'default.jpg'}`}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>₹{item.price}</Card.Text>
        <Button variant="success" onClick={() => onAddToCart(item)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
