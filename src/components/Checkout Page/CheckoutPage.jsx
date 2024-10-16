import React, { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const location = useLocation();
  const { product, selectedSize } = location.state || {}; // Access passed state with fallback

  const [discountCode, setDiscountCode] = useState('');
  const [subtotal] = useState(product ? product.price : 0); // Assuming price is for a single item
  const shipping = 200; // Fixed shipping cost
  const total = subtotal + shipping; // Calculate total

  if (!product) {
    return <p>No product data found. Please go back and select a product.</p>;
  }

  return (
    <Container className="checkout-page">
      <Row>
      <Col md={6} lg={6}>
          <form className='form-bottom'> 
          <Row className='mb-0'>
            <Col className='lebel-col'> <label>Contact</label></Col>
            <Col className='login-col'>
              {/* Link for 'Log in' */}
             <Link to="/login" className="login-link">
              Log in
            </Link>
            </Col>
          </Row>
            <input type='email' placeholder='Email' required></input>

            {/* Checkbox for news and offers */}
            <div className="form-checkbox">
              <input type="checkbox" id="offers" className='checkbox-input'/>
              <label htmlFor="offers" className='offers-label'>Email me with news and offers</label>
            </div>
          </form>
          {/* Delivery Form */}
          <form className='form-bottom'>
            <label className='delivery-label'>Delivery</label>
            <Form.Group controlId="country">
              <Form.Control as="select" defaultValue="Pakistan">
                <option>Pakistan</option>
              </Form.Control>
            </Form.Group>

            <Row className='mb-0'>
              <Col md={6} className='mb-0'>
                <Form.Group controlId="firstName">
                  <Form.Control type="text" placeholder="First name" required />
                </Form.Group>
              </Col>
              <Col md={6} className='mb-0'>
                <Form.Group controlId="lastName">
                  <Form.Control type="text" placeholder="Last name" required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="address">
              <Form.Control type="text" placeholder="Complete address required" required />
            </Form.Group>

            <Row className='mb-0'>
              <Col md={6} className='mb-0'>
                <Form.Group controlId="city">
                  <Form.Control type="text" placeholder="City" required />
                </Form.Group>
              </Col>
              <Col md={6} className='mb-0'>
                <Form.Group controlId="postalCode">
                  <Form.Control type="text" placeholder="Postal code (optional)" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="mobile">
              <Form.Control type="text" placeholder="Mobile no." required />
            </Form.Group>
            <div className="form-checkbox">
              <input type="checkbox" id="saveInfo" className='checkbox-input' />
              <label htmlFor="saveInfo" className='save-info-label'>Save this information for next time</label>
            </div>
          </form>
          
        </Col>

        {/* Checkout Summary Section */}
        <Col md={6} lg={6} className="checkout-item">
          <Row className="checkout-row">
            <Col lg={2}>
              <img
                src={`${process.env.REACT_APP_PORT}${product.images}`}
                width={75}
                height={75}
                alt={product.name}
                className="checkout-image"
              />
            </Col>
            <Col lg={8} className="checkout-col">
              <span>{product.name}</span>
              <br />
              <span>{selectedSize}</span>
            </Col>
            <Col lg={2} className="checkout-price">
              <span>Rs. {product.price}</span>
            </Col>
             {/* Discount Code Section */}
          {/* <Form className="mt-3"> */}
            <Row className='mt-4'>
              <Col md={10} lg={10} className='input-col'>
                <input
                  type="text"
                  placeholder="Discount code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
              </Col>
              <Col md={2} lg={2} className='text-end p-0'>
                <button className='apply-btn'>Apply</button>
              </Col>
            </Row>
          {/* </Form> */}

          {/* Price Breakdown Section */}
          <div className="price-breakdown mt-4">
            <Row > 
              <Col lg={6} className="text-left">Subtotal</Col>
              <Col lg={6} className="text-right">Rs. {subtotal}</Col>
            </Row>
            <Row>
              <Col lg={6} className="text-left">
                Shipping{' '}
                <span className="info-icon" title="Shipping cost may vary.">❔</span>
              </Col>
              <Col lg={6} className="text-right">Rs. {shipping}</Col>
            </Row>
            <Row className="total-bill">
              <Col lg={6} className="text-left"><strong>Total</strong></Col>
              <Col lg={6} className="text-right">PKR 
              <strong className='strong-total'>
              Rs. {total}
              </strong>
             </Col>
            </Row>
            <Row>
              <Col lg={6} className="text-left">Including Rs 0.00 in taxes</Col>
            </Row>
            </div>
          </Row>       
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
