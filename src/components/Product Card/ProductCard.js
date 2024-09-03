import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./ProductCard.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, images, name, reviewCount, price, regularprice, sizes } = product;

  const allSizes = ['S', 'M', 'L', 'XL'];

  // State to track selected star index
  const [selectedStar, setSelectedStar] = useState(null);

  // Function to handle star click
  const handleStarClick = (index) => {
    if (selectedStar === index) {
      setSelectedStar(null);
    } else {
      setSelectedStar(index);
    }
  };

  // Calculate discount
  const discount = regularprice - price;

  // Function to check if a size is available
  const isSizeAvailable = (sizeName) => {
    return sizes.some(size => size.name === sizeName && size.quantity > 0);
  };

  return (
    <Link to={`/products/${_id}`} style={{ textDecoration: "none" }}>
      <Card className="card, border-none">
        <Card.Img variant="top" src={images} alt={name} />
        <Card.Body className="card-body">
          <Card.Title className="product_title">{name}</Card.Title>
          <Card.Text className="card-text">
            <div className="cardrating">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  onClick={() => handleStarClick(index)}
                  color={selectedStar !== null && index <= selectedStar ? "yellow" : undefined}
                />
              ))}
              {reviewCount} reviews
            </div>
            <div className="price">
              <span className="hidden">Regular Price</span>
              <span className="hidden_regular">Rs.{regularprice}</span>
              <span className="price-current">Rs.{price}</span>
              &nbsp;
              <span className="hidden_save">Save Rs.{discount}</span>
            </div>
            <div className="sizes">
              {allSizes.map((size, index) => (
                <span
                  key={index}
                  className={`size ${isSizeAvailable(size) ? "available" : "unavailable"}`}
                >
                  {size}
                </span>
              ))}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard;
