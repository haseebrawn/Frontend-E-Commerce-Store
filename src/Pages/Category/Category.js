import React from 'react';
import './Category.css';
import Button from '../../components/Button/Button';

const Category = () => {
  return (
    <>
    <div className="index-section">
      <div className="page-width">
        <div className="theme-block">
            <div className="para-div">
                <div className="enlarge-text">
                    <p>We design durable&nbsp;
                    <strong>"all day everyday activewear"&nbsp;</strong>
                    with a conscience —&nbsp;
                    <strong>100% made in Pakistan.</strong>
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
                    <img className="callout-image" src="/men_up4.avif" alt="Logo" />
                    <img className="callout-image" src="/men_up3.avif" alt="Logo" />
                    <img className="callout-image" src="/men_up5.avif" alt="Logo" />
                    <img className="callout-image" src="/men_side.avif" alt="Logo" />
                    <img className="callout-image" src="/men_back.avif" alt="Logo" />
                </div>
              </div>
            </div>
            <div className="feature-row-text">
              <div className="feature-row-content">
                <p className="subtitle">Brand New</p>
                <h2 className="h3-div">Active-Wear</h2>
                <div className="paragraph">
                  <p>Check out our comfy t-shirts, raglans, trousers and more.</p>
                </div>
                <a href="/collections/men-tops">
                  <Button class_name="btn-button" btn_label="Men Tops"/>
                </a>
                <a href="/collection/men-bottoms">
                <Button class_name="btn-button" btn_label="Men Bottoms"/>
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Category
