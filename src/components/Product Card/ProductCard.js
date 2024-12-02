import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./ProductCard.css";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { slug, images, name, reviewCount, price, regularprice, sizes, category } = product;

  const allSizes = ["S", "M", "L", "XL"];
  const [selectedStar, setSelectedStar] = useState(null);

  const handleStarClick = (index) => {
    if (selectedStar === index) {
      setSelectedStar(null);
    } else {
      setSelectedStar(index);
    }
  };

  const discount = regularprice - price;
  const isOnSale = discount > 0;
  const isSoldOut = !sizes.some((size) => size.quantity > 0);

  const isSizeAvailable = (sizeName) => {
    return sizes.some((size) => size.name === sizeName && size.quantity > 0);
  };

  return (
    <div
      onClick={() => {
        window.location.href = `/collections/${category}/products/${slug}`;
      }}
      style={{ textDecoration: "none", cursor: "pointer" }}
    >
      <Card className="card border-none">
        {isSoldOut && <span className="badge sold-out">Sold Out</span>}
        {isOnSale && !isSoldOut && <span className="badge sale">Sale</span>}

        <Card.Img variant="top" src={images} alt={name} />
        <Card.Body className="card-body">
          <Card.Title className="product_title">{name}</Card.Title>
          <Card.Text className="card-text">
            <div className="cardrating">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  onClick={() => handleStarClick(index)}
                  color={
                    selectedStar !== null && index <= selectedStar
                      ? "yellow"
                      : undefined
                  }
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
                  className={`size ${
                    isSizeAvailable(size) ? "available" : "unavailable"
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
