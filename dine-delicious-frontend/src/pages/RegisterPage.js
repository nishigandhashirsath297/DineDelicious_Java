// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import axios from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER'
  });

  const [registerStatus, setRegisterStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/auth/register', formData);
      console.log('Registration success:', response.data);
      setRegisterStatus('success');
      setErrorMessage('');

      setTimeout(() => navigate('/login'), 1500);
    } catch (error) {
      console.error('Registration failed:', error);
      setRegisterStatus('error');
      setErrorMessage(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="text-center mb-4">Register</h3>

              {registerStatus === 'success' && (
                <Alert variant="success">Registration successful! Redirecting to login...</Alert>
              )}
              {registerStatus === 'error' && (
                <Alert variant="danger">{errorMessage}</Alert>
              )}

              <Form onSubmit={handleRegister}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Control type="hidden" name="role" value={formData.role} />

                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <small>
                  Already have an account? <a href="/login">Login here</a>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
