import React from "react";
import { Row, Col } from "react-bootstrap";
import  "./BundleDeals.css";
import ProductCard from "../Product Card/ProductCard";

const BundleDeals = () => {
  const products = [
    {
      image: "https://radstore.pk/cdn/shop/files/bundle_360x.jpg?v=1710517968",
      name: "Bundle Pack od Any Three Trousers (Flat 40% Off)",
    //   star: 4.5,
    //   reviewCount: "(Flat 40% Off)",
      price: "2500",
    //   sizes: ["S", "M", "L", "XL"],
    },
    {
      image: "https://radstore.pk/cdn/shop/files/bundle_0c402add-1751-43a6-89ad-f4ea16e50d46_360x.jpg?v=1710518163",
      name: "Bundle Pack of Any Three T-shirts(Flat 40% Off)",
    //   star: 4,
    //   reviewCount: "(Flat 40% Off)",
      price: "4350",
    //   sizes: ["S","M", "L", "XL"],
    },

   
  ];



  return (
    <div className="collection">
      <div className="collection_title">
        <h2>Bundle Deals</h2>
      </div>
      <div className="collection_box">
        <Row>
          {products.map((product, index) => (
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

export default BundleDeals;






