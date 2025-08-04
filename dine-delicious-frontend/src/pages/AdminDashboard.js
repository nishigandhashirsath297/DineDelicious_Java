import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  const sections = [
    {
      title: 'Manage Menu',
      description: 'Add, update, or delete menu items.',
      buttonText: 'Go to Menu',
      onClick: () => alert('Navigate to Menu Management'),
    },
    {
      title: 'Manage Bookings',
      description: 'View and manage customer bookings.',
      buttonText: 'View Bookings',
      onClick: () => alert('Navigate to Bookings'),
    },
    {
      title: 'Manage Tables',
      description: 'Add or edit table details and availability.',
      buttonText: 'Manage Tables',
      onClick: () => alert('Navigate to Table Management'),
    },
    {
      title: 'Manage Users',
      description: 'View registered users and update roles.',
      buttonText: 'View Users',
      onClick: () => alert('Navigate to User Management'),
    },
    {
      title: 'Manage Reviews',
      description: 'Monitor and moderate customer reviews.',
      buttonText: 'Manage Reviews',
      onClick: () => alert('Navigate to Reviews'),
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <Row>
        {sections.map((section, index) => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{section.title}</Card.Title>
                <Card.Text>{section.description}</Card.Text>
                <Button variant="primary" onClick={section.onClick}>
                  {section.buttonText}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminDashboard;
