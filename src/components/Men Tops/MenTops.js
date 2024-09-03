import React from "react";
import { Row, Col } from "react-bootstrap";
import  "./MenTops.css";
import ProductCard from "../Product Card/ProductCard";

const MenTops = () => {
  const products = [
    {
      image: "https://radstore.pk/cdn/shop/files/1C1A0506_360x.jpg?v=1687774700",
      name: "Premium Aqua & Black Gradient T-Shirt",
    //   star: 4.5,
      reviewCount: 20,
      price: "1,500",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      image: "https://radstore.pk/cdn/shop/products/1C1A9484_360x.jpg?v=1678183178",
      name: "Premium White & Black Gradient T-Shirt",
    //   star: 4,
      reviewCount: 15,
      price: "1,000",
      sizes: ["S","M", "L", "XL"],
    },
    {
      image: "https://radstore.pk/cdn/shop/products/1C1A9919_360x.jpg?v=1681458081",
      name: "Premium Maroon & Black Gradient T-Shirt",
    //   star: 4,
      reviewCount: 15,
      price: "800",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      image: "https://radstore.pk/cdn/shop/products/IMG_3769_360x.jpg?v=1681582653",
      name: "Siberian Camo Gradient Quick Dry T-Shirt",
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
        <h2>Men Tops</h2>
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

export default MenTops;



















// import React from "react";
// import { Row, Col } from "react-bootstrap";
// import styles from "./MenTops.module.css";

// const MenTops = () => {
//   const images = [
//     "https://radstore.pk/cdn/shop/files/1C1A0506_360x.jpg?v=1687774700",
//     "https://radstore.pk/cdn/shop/products/1C1A9484_360x.jpg?v=1678183178",
//     "https://radstore.pk/cdn/shop/products/IMG_3769_360x.jpg?v=1681582653",
//     "https://radstore.pk/cdn/shop/products/1C1A9919_360x.jpg?v=1681458081",
//   ];

//   // Repeat images array 25 times
//   const repeatedImages = Array.from({ length: 25 }, () => images).flat();

//   return (
//     <div className={styles.collection}>
//       <div className={styles.collection_title}>
//         <h2>Men Tops</h2>
//       </div>
//       <div className={styles.collection_box}>
//         <Row>
//           {repeatedImages.map((image, index) => (
//             <Col key={index} xs={6} sm={3} md={3} lg={3}>
//               <img
//                 src={image}
//                 alt={`Image ${index}`}
//                 width={250}
//                 height={250}
//                 className={styles.card}
//               />
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default MenTops;
