import React, { useState, useEffect } from 'react';
import './Category.css';
import Button from '../../components/Button/Button';

const imageSets = [
  ["/men_up4.avif", "/men_up3.avif", "/men_up5.avif", "/men_side.avif", "/men_back.avif"],
  ["/shorts2.webp", "/SweatShirts1+hoddy.webp", "/shorts5.webp", "/shorts4.webp", "/SweatShirts5+hoddy.webp"],
  ["/Bottom1.webp", "/Bottom3.webp", "/Bottom6.webp", "/Bottom7.webp", "/Bottom12.webp"],
  ["/sale 1.webp", "/Bottom11.webp", "/MenTops1.webp", "/Bottom5.webp", "/MenTops5.webp"],
  ["/newarrival1.webp", "/newarrival3.webp", "/newarrival5.webp", "/newarrival7.webp", "/newarrival9.webp"],
];

const Category = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    // Change the image set every 10 minutes (600000 milliseconds)
    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
    }, 1000000);

    return () => clearInterval(interval);
  }, []);

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
                  {imageSets[currentSetIndex].map((src, index) => (
                    <img key={index} className="callout-image" src={src} alt={`Image ${index + 1}`} />
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
