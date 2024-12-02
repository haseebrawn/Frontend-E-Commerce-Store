import React, { useState, useEffect } from 'react';
import './Category.css';
import axios from 'axios';
import Button from '../../components/Button/Button';

const Category = () => {
  const [productImages, setProductImages] = useState([]); // Holds image sets
  const [currentSetIndex, setCurrentSetIndex] = useState(0); // Tracks which set is shown

  // Fetch product images from the backend and organize them in groups of 5
  useEffect(() => {
    const fetchProductImages = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PORT}/api/product/getProducts`
        ); 
        
        // Access the data directly from response
        const images = response.data.data.product.map(product => `${process.env.REACT_APP_PORT}${product.images}`); 
  
        // Group images into arrays of 5
        const chunkedImages = [];
        for (let i = 0; i < images.length; i += 5) {
          chunkedImages.push(images.slice(i, i + 5));
        }
        
        setProductImages(chunkedImages); // Set state with groups of 5 images
      } catch (error) {
        console.error("Error fetching product images:", error);
      }
    };
  
    fetchProductImages();
  }, []);
  

  // Rotate through image sets every 10 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 600000); // 10 minutes in milliseconds

    return () => clearInterval(interval);
  }, [productImages]);

  return (
    <>
      <div className="index-section">
        <div className="page-width">
          <div className="theme-block">
            <div className="para-div">
              <div className="enlarge-text">
                <p>
                  We design durable <strong>"all day everyday activewear"</strong> with a conscience — <strong>100% made in Pakistan.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="index-section">
        <div className="page-width">
          <div className="feature-row">
            <div className="feature-row-item">
              <div className="callout-images">
                <div className="callout-images-centered">
                  {productImages[currentSetIndex]?.map((src, index) => (
                    <img key={index} className="callout-image" src={src} alt={`Product Image ${index + 1}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="feature-row-text">
              <div className="feature-row-content">
                <p className="subtitle">Brand New</p>
                <h2 className="h3-div">Active-Wear</h2>
                <div className="paragraph">
                  <p>Check out our comfy t-shirts, raglans, trousers, and more.</p>
                </div>
                <a href="/collections/men-tops">
                  <Button class_name="btn-button" btn_label="Men Tops" />
                </a>
                <a href="/collections/men-bottoms">
                  <Button class_name="btn-button" btn_label="Men Bottoms" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
