import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center align-items-center">
        <Col md={8}>
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h3 className="mb-3">Page Not Found</h3>
          <p className="text-muted">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="primary" onClick={() => navigate('/')}>
            Go to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
