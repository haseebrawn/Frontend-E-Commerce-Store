import React, { useState, useEffect } from "react";
import { Row, Col} from "react-bootstrap";
import { useLocation} from "react-router-dom";
import Button from "../Button/Button";
import "./TShirts.css";
import ProductCard from "../Product Card/ProductCard";
import axios from "axios";

const MenTops = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if on the home page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PORT}/api/product/category/t-shirts`
        );
        const updatedProducts = response.data.data.product.map((product) => ({
          ...product,
          images: `${process.env.REACT_APP_PORT}${product.images}`,
        }));
        setProducts(updatedProducts);
      } catch (err) {
        console.error("Failed to fetch products by category", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="collection">
      <div className="collection_title">
        <h2>T-Shirts</h2>
      </div>
      <div className="collection_box">
        <Row>
          {(isHomePage ? products.slice(0, 8) : products).map(
            (product, index) => (
              <Col key={index} xs={6} sm={3} md={3} lg={3}>
                <ProductCard product={product} />
              </Col>
            )
          )}
        </Row>
        <Button
          btn_label="View all"
          class_name="btn-view"
          click_event={() =>
            (window.location.href = "/collections/men-tops")
          }
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default MenTops;
