import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import  "./FullSleeveT-Shirts.css";
import ProductCard from "../Product Card/ProductCard";
import axios from "axios";

const FullSleeveTShirts = () => {
  const [products, setProducts] = useState([]);

  // Fetch products by category from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_PORT}/api/product/category/fullSleeveTShirts`);
        // Construct the image URL for each product
        const updatedProducts = response.data.data.product.map(product => ({
          ...product,
          images: `${process.env.REACT_APP_PORT}${product.images}` // Assuming product.image contains the relative path
        }));
        setProducts(updatedProducts);
        console.log(updatedProducts);
      } catch (err) {
        console.error("Failed to fetch products by category", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="collection">
      <div className="collection_title">
        <h2>Full Sleeve T-Shirts</h2>
      </div>
      <div className="collection_box">
        <Row>
          {products.map((product, index) => (
            <Col key={index} xs={6} sm={3} md={3} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default FullSleeveTShirts;






