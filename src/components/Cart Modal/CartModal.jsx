import React, { useState } from 'react';
import './CartModal.css';

const CartModal = ({ cartItems = [], closeCartModal }) => {
  const [cart, setCart] = useState(cartItems);

  // Function to handle adding a product to the cart
  const addToCart = (newProduct) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === newProduct.id
      );
      
      // If the product already exists, increase its quantity
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += newProduct.quantity;
        return updatedCart;
      }

      // Otherwise, add the new product to the cart
      return [...prevCart, newProduct];
    });
  };

  // Function to handle quantity increase
  const handleIncreaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity = (newCart[index].quantity || 1) + 1;
    setCart(newCart);
  };

  // Function to handle quantity decrease
  const handleDecreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1); // Remove item if quantity is 0
    }
    setCart(newCart);
  };

  // Render the cart modal
  return (
    <div className="cart-modal open">
      {/* Close button */}
      <button className="close-btn" onClick={closeCartModal}>
        x
      </button>

      <h2>Cart</h2>

      {/* Check if cart is empty */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={item.id} className="cart-item">
              <img src={`${process.env.REACT_APP_PORT}${item.image}`} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
              <div>
              <p>{item.name}</p>
              <p>{item.size}</p>
              </div>
              <div>
                <div className="quantity-control">
                  <button onClick={() => handleDecreaseQuantity(index)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => handleIncreaseQuantity(index)}>+</button>
                </div>
                <p>Rs. {item.price}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Checkout Button */}
      {cart.length > 0 && (
        <div className="cart-total">
          <p>
            Subtotal: Rs.{' '}
            {cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)}
          </p>
          <button className="checkout-btn">Check out</button>
        </div>
      )}
    </div>
  );
};

export default CartModal;
