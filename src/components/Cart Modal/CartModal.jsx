import React from 'react';
import './CartModal.css'; // Add your CSS here

const CartModal = ({ cartItems = [], closeCartModal }) => {
  return (
    <div className="cart-modal open">
      {/* Close button */}
      <button className="close-btn" onClick={closeCartModal}>
        x
      </button>

      <h2>Cart</h2>

      {/* Check if cart is empty */}
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={`${process.env.REACT_APP_PORT}${item.image}`} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>{item.size}</p>
                <p>Rs. {item.price}</p>
                <div className="quantity-control">
                  <button>-</button>
                  <span>{item.quantity || 1}</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <p>
            Subtotal: Rs.{' '}
            {cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)}
          </p>
          <button className="checkout-btn">Check out</button>
        </div>
      )}
    </div>
  );
};

export default CartModal;
