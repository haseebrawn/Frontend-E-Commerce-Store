import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const location = useLocation();
  const { product, selectedSize } = location.state; // Access passed state here

  if (!product) {
    return <p>No product data found. Please go back and select a product.</p>;
  }

  return (
    <Container className="checkout-page">
      <h1>Checkout</h1>
      <Row className="checkout-container">
        <Col md={6} className="checkout-form">
          <h2>Contact Information</h2>
          <Form>
            {/* Form fields */}
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>
            {/* Other form fields */}
            <Button className="proceed-payment-button" variant="success" type="submit">
              Proceed to Payment
            </Button>
          </Form>
        </Col>

        <Col md={6} className="checkout-item">
          <img src={product.image} alt={product.name} className="checkout-image" />
          <div className="item-details">
            <h2>{product.name}</h2>
            <p>Price: Rs. {product.price}</p>
            <p>Size: {selectedSize}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
