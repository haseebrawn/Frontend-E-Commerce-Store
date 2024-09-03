import React from "react";
import { Row, Col } from "react-bootstrap";
import  "./MenBottoms.css";
import ProductCard from "../Product Card/ProductCard";

const MenBottoms = () => {
  const products = [
    {
      image: "https://radstore.pk/cdn/shop/files/1C1A4508_360x.jpg?v=1714476918",
      name: "Premium Micro Stretch Pants  Gray Stripes",
    //   star: 4.5,
      reviewCount: 20,
      price: "1,500",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      image: "https://radstore.pk/cdn/shop/files/1C1A0572_360x.jpg?v=1687782305",
      name: "Black Premium Micro Stretch Tech Pants",
    //   star: 4,
      reviewCount: 15,
      price: "1,000",
      sizes: ["S","M", "L", "XL"],
    },
    {
      image: "https://radstore.pk/cdn/shop/products/1C1A9801_360x.jpg?v=1681455894",
      name: "Black Quick Dry Bottoms with Two White Stripes",
    //   star: 4,
      reviewCount: 15,
      price: "800",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      image: "https://radstore.pk/cdn/shop/products/1C1A9542_360x.jpg?v=1681456338",
      name: "Navy Premium Micro Stretch Cargo Pants",
    //   star: 4,
      reviewCount: 15,
      price: "600",
      sizes: ["S","M", "L", "XL"],
    },
   
  ];

   const repeatedImages = Array.from({ length: 25 }, () => products).flat();

  return (
    <div className="collection">
      <div className="collection_title">
        <h2>Men Bottoms</h2>
      </div>
      <div className="collection_box">
        <Row>
          {repeatedImages.map((product, index) => (
            <Col key={index} xs={6} sm={3} md={3} lg={3}>
              <ProductCard product={product} />
              {/* <ProductCard {...product} /> */}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MenBottoms;






