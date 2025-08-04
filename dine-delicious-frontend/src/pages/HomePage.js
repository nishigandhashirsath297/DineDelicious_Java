import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
return (
<Container className="py-5">
<Row className="align-items-center">
<Col md={6}>
<h1 className="mb-4">Welcome to DineDelicious</h1>
<p>
Discover great food and experience top-notch dining. Whether you're in the mood for a quick bite or a full-course meal, we’ve got something delicious waiting for you.
</p>
<div className="mt-4">
<Link to="/menu">
<Button variant="primary" className="me-2">Explore Menu</Button>
</Link>
<Link to="/reserve">
<Button variant="outline-secondary">Reserve a Table</Button>
</Link>
</div>
</Col>
<Col md={6}>
<img src="https://source.unsplash.com/600x400/?restaurant,food" alt="Delicious Food" className="img-fluid rounded shadow" />
</Col>
</Row>
</Container>
);
};

export default HomePage;