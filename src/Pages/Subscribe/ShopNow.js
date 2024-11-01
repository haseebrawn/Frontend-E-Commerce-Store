import React from "react";
import Button from "../../components/Button/Button";
import "./ShopNow.css";


const ShopNow = () => {
  
  return (
    <div className="subscribe">
      <div className="subscribe_box">
        <div className="subscribe_box_right">
          <div className="subscribe_box_right_row">
            <div>
              <a href="">
                <div className="image_subscribe_wrap">
                  <img
                    className="image_subscribe"
                    src="/footer_above.webp"
                    alt="get update"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="subscribe_box_left">
            <div className="subheading">A Good Change</div>
            <div className="h1_appear_delay">
              Why Shop With Us
            </div>
            <div className="h1_appear_delay_2">
            <p>
              Along with hundreds of online stores, you might think as to what
              makes Rad any different?
              <br />
               And the difference is how we treat our
              customers. Developing a long-term relationship demands that we
              give our best. The quality of our products speaks for itself!
            </p>
           </div>
            <div className="subscribe_box_left_box">
              <Button
                click_event={() => (window.location.href = "/collections/best-sellers")}
                class_name="button-Shop"
                btn_label="Shop Now"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
