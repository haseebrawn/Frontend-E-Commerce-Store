import React, { useState } from "react";
import { DiJqueryLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import  './Footer.css';


const Footer = () => {
  const [email, setEmail] = useState("");


  return (
    <div className="footer">
      <div className="footer_box">
        <div className="footer_box_social">
            <div className="footer_box_social_logo" >
                <p className="para">NEED HELP?</p>
                <div>
                    <div>
                        <p>Reach us at</p>
                        <p><strong>SUPPORT@RADSTORE.PK</strong></p>
                        <p><strong >Call/Whatsapp :&nbsp; </strong>
                        <a href="#" className="strong"><strong>03022994444</strong></a>
                        </p>
                        <p>Our timings are Mon-Sat 9am-5pm</p>
                        <p>Address: 84 Westwood, Canal Road, Thokar Niaz Beg, Lahore.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer_box_discover">
          <h3 className="h3_footer">Explore</h3>
          <div>
            <ul className="ul_footer">
                <li className="li_footer">
                  <a href="/sale">⚡Sale</a>
                </li>
                <li className="li_footer">
                  <a href="/men-tops">Men Tops</a>
                </li>
                <li className="li_footer">
                  <a href="/men-bottoms">Men Bottoms</a>
                </li>
                <li className="li_footer">
                  <a href="/best-sellers">Best Sellers</a>
                </li>
                <li className="li_footer">
                  <a href="/new-arrivals">New Arrivals</a>
                </li>
            </ul>
          </div>
        </div>

        <div className="footer_box_discover">
          <div>
            <ul className="ul_footer">
                <li className="li_footer"><a href="/about-us">About us</a></li>
                <li className="li_footer"><a href="/contact-us">Contact us</a></li>
                <li className="li_footer"><a href="/refund-policy">Returns & Exchanges</a></li>
                <li className="li_footer"><a href="/shipping-policy">Shipping Policy</a></li>
                <li className="li_footer"><a href="/terms-of-service">Terms of Service</a></li>
                <li className="li_footer"><a href="privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="log_social">
        <div className="footer_logo">
        <a href="/">
        <img src="/footer_logo.webp" alt="logo" /> </a>
        </div>   
          <div className="footer_social">
            <a href="#">
            <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
