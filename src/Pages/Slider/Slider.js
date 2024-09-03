import React, { useState, useEffect } from "react";
import "./Slider.css";
import Child from "./Child";
const str=["For the explorers.","The Adventurous.","And the fearless."]
const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = 3;
  const interval = 3400;

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      setActiveSlide((prevIndex) => (prevIndex + 1) % slideCount);
    }, interval);

    return () => clearInterval(autoplayTimer);
  }, [interval, slideCount]);

  return (
    <div className="Slider-section">
      <div className="slider_text-content">
        {[1, 2, 3].map((index,key) => (
          <div
            key={index}
            className={`animation_croper_slider ${
              index - 1 === activeSlide ? "active" : ""
            }`}
          >
            <div className={`slider-header${index} `}>
              {
                <Child text={str[key]}/>
              }
              {/* <div className="box fadeInUp">
                {index === 1 && "For the explorers."}
                {index === 2 && "The Adventurous."}
                {index === 3 && "And the fearless."}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
