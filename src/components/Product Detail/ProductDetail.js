import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";
import ContactForm from "../ContactForm/ContactForm";
import ReviewForm from "../ReviewForm/ReviewForm";
import CartModal from "../Cart Modal/CartModal";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S"); // Default selected size
  const [selectedUnavailableSize, setSelectedUnavailableSize] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PORT}/api/product/${id}`
        );
        setProduct(response.data.data.product);
        console.log("Product_id", response.data.data.product);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const availableSizes = ["S", "M", "L", "XL"];

  const handleSizeClick = (sizeData, sizeName) => {
    setSelectedSize(sizeName); // Set the selected size
    if (!sizeData || sizeData.quantity === 0) {
      setSelectedUnavailableSize(true);
    } else {
      setSelectedUnavailableSize(false);
    }
  };

  const handleAddToCart = () => {
    const sizeData = product.sizes.find((s) => s.name === selectedSize);
    if (!sizeData || sizeData.quantity === 0) {
      // Prevent adding if size is unavailable
      return;
    }

    // Check if the item already exists in the cart
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.size === selectedSize
      );

      if (existingItemIndex >= 0) {
        // Check if we can increase quantity based on available stock
        const newQuantity = prevItems[existingItemIndex].quantity + 1;

        if (newQuantity <= sizeData.quantity) {
          const updatedCart = [...prevItems];
          updatedCart[existingItemIndex].quantity = newQuantity; // Update quantity
          return updatedCart;
        } else {
          // If we can't add more than the available quantity, do nothing
          return prevItems; // Do not modify cart if exceeding available stock
        }
      }

      // Add new item to the cart
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          size: selectedSize,
          quantity: 1, // Initialize quantity to 1
          image: product.images, // Ensure product image is set correctly, assuming it's an array
        },
      ];
    });

    setIsCartOpen(true); // Open the cart modal
  };

  const getStockStatus = () => {
    const selectedSizeData = product.sizes.find((s) => s.name === selectedSize);
    if (selectedSizeData) {
      if (selectedSizeData.quantity > 5) {
        return <span className="in-stock">● In stock - ready to ship</span>;
      } else if (
        selectedSizeData.quantity > 0 &&
        selectedSizeData.quantity <= 5
      ) {
        return (
          <span className="low-stock">
            ● Low stock - {selectedSizeData.quantity} items left
          </span>
        );
      } else {
        return <span className="out-of-stock">● Out of stock</span>;
      }
    }
  };

  return (
    <>
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          closeCartModal={() => setIsCartOpen(false)}
        />
      )}

      <div className="product-detail">
        <div className="product-images">
          <img
            src={`${process.env.REACT_APP_PORT}${product.images}`}
            alt={product.name}
            className="main-image"
          />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="price-detail">
            <p className="original-price">Rs. {product.regularprice}</p>
            <p className="discounted-price">Rs. {product.price}</p>
          </div>
          <p className="tax-info">
            Tax included. Shipping calculated at checkout.
          </p>
          <hr />
          <div className="product-sizes">
            <label className="label-detail">Size</label>
            <div className="sizes-container">
              {availableSizes.map((size, index) => {
                const sizeData = product.sizes.find((s) => s.name === size);
                return (
                  <button
                    key={index}
                    className={`size-button ${
                      size === selectedSize ? "selected" : ""
                    } ${
                      !sizeData || sizeData.quantity === 0 ? "unavailable" : ""
                    }`}
                    onClick={() => handleSizeClick(sizeData, size)}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
            <div className="customer-guarantee">
              <p className="customer-guarantee">
                Customer satisfaction guarantee
              </p>
            </div>
            <div className="stock-status">{getStockStatus()}</div>
          </div>

          {selectedUnavailableSize ? (
            <button className="sold-out-button">Sold Out</button>
          ) : (
            <>
              <button
                className="add-to-cart" // Keep button styling unchanged
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <Link
                to={`/checkout/${product._id}`}
                state={{ product: product, selectedSize: selectedSize }}
              >
                <button className="buy-now">Buy it now</button>
              </Link>
            </>
          )}

          <ContactForm />
        </div>
      </div>

      <div>
        <ReviewForm />
      </div>
    </>
  );
};

export default ProductDetail;
