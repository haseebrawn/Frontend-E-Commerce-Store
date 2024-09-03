import React from "react";
// import "../App.css";""./HeroSection.css";
import Button from "../../components/Button/Button";
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text-wrap">
        <div className="page-width">
          <div className="hero-txt-content">
            <h2 className="hero-title">
              <div className="animation-cropper">
                <div className="animation-contents">
                  Pakistan's Favorite
                  <br />
                  Active-wear
                </div>
              </div>
            </h2>
            <div className="hero-link">
              <div className="animation-cropper">
                <div className="animation-contents">
                  <Button href="#" class_name="btn_Shop" btn_label="Shop Now" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
