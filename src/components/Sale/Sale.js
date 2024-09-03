import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Sale.css";
import ProductCard from "../Product Card/ProductCard";

const Sale = () => {
  const products = [
    {
      image: "https://radstore.pk/cdn/shop/files/aqua_360x.jpg?v=1714984221",
      name: "Aqua & Black Gradient Twinset with Shorts",
    //   star: 4.5,
      reviewCount: 20,
      price: "4,000  Rs.2,800  Save Rs, 1200",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      image: "https://radstore.pk/cdn/shop/files/1C1A4381_360x.jpg?v=1711098219",
      name: "Maroon Premium & Black Gradient Twinset",
    //   star: 4,
      reviewCount: 15,
      price: "4,000  Rs.2,800  Save Rs, 1200",
      sizes: ["S","M", "L", "XL"],
    },
    {
      image: "https://radstore.pk/cdn/shop/files/1C1A0195_360x.jpg?v=1684836490",
      name: "Black Premium Micro Stretch Cargo Shorts",
    //   star: 4,
      reviewCount: 15,
      price: "4,000  Rs.2,800  Save Rs, 1200",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      image: "https://radstore.pk/cdn/shop/files/1C1A4494_360x.jpg?v=1713957459",
      name: "Black Bottoms with Pinstripe Lines ",
    //   star: 4,
      reviewCount: 15,
      price: "4,000  Rs.2,800  Save Rs, 1200",
      sizes: ["S","M", "L", "XL"],
    },
   
  ];

   const repeatedImages = Array.from({ length: 10 }, () => products).flat();

  return (
    <div className="collection">
      <div className="collection_title">
        <h2>⚡Sale</h2>
      </div> 
      <div className="collection_box">
        <Row>
          {repeatedImages.map((product, index) => (
            <Col key={index} xs={6} sm={3} md={3} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Sale;






