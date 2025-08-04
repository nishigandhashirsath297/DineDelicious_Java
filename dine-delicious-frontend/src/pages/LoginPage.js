import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null); // 'success' or 'error'

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login check — replace with real backend call later
    if (email === 'admin@example.com' && password === 'admin') {
      setLoginStatus('success');
    } else {
      setLoginStatus('error');
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="text-center mb-4">Login</h3>

              {loginStatus === 'success' && (
                <Alert variant="success">Login successful!</Alert>
              )}
              {loginStatus === 'error' && (
                <Alert variant="danger">Invalid email or password.</Alert>
              )}

              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <small>
                  Don’t have an account? <a href="/register">Register here</a>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
