import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import "./NavBar.css"; // Import your CSS file
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import CartModal from "../Cart Modal/CartModal"; // Import your CartModal component

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Define state to manage logo source
  const [logoSrc, setLogoSrc] = useState(
    isHomePage ? "/logo11.avif" : "/logo-black.avif"
  );

  // Cart modal state
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Update the logo source based on the current route
  useEffect(() => {
    setLogoSrc(isHomePage ? "/logo11.avif" : "/logo-black.avif");
  }, [isHomePage]);

  const toggleCartModal = () => {
    setIsCartOpen((prev) => !prev); // Toggle the cart modal
    console.log("Cart modal toggled:", !isCartOpen); // Debug log
  };

  return (
    <div className={`navbar ${isHomePage ? "" : "other_page"}`}>
      <div className="navbar_free">
        FREE Shipping for orders over Rs.2000
      </div>
      <div className="navbar_container">
        <div className="navbar_container_left">
          <div className={`navbar_container_left_box_input ${isHomePage ? "" : "black_text"}`}>
            <ul className={`navbar_container_left_box_input_box ${isHomePage ? "" : "black_text"}`}>
              <li className="site_nav_li">
                <a href="#" className="site_nav_shop">
                  Shop
                  <RiArrowDropDownLine className="nav_link_icon" />
                </a>
                <ul className="site_nav_dropdown_ul">
                  <li className="site_nav_li">
                    <a href="#" className="site_nav_dropdown_link">Best Sellers</a>
                  </li>
                  <li className="site_nav_li">
                    <a href="#" className="site_nav_dropdown_link">New Arrivals</a>
                  </li>
                  <li className="site_nav_li">
                    <a href="#" className="site_nav_dropdown_link">Summer Twinsets</a>
                  </li>
                  <li className="site_nav_li">
                    <a href="#" className="site_nav_dropdown_link">Sweatshirts & Hoodies</a>
                  </li>
                  <li className="site_nav_li">
                    <a href="#" className="site_nav_dropdown_link">Trousers</a>
                  </li>
                  <li className="site_nav_li">
                    <a href="full-sleeve-t-shirts" className="site_nav_dropdown_link">Full Sleeve T-Shirts</a>
                  </li>
                  <li className="site_nav_li">
                    <a href="#" className="site_nav_dropdown_link">T-Shirts</a>
                  </li>
                  <li className="site_nav_li">
                    <a href="/shorts" className="site_nav_dropdown_link">Shorts</a>
                  </li>
                </ul>
              </li>
              <li className="site_nav_li">
                <a href="/sale" className="site_nav_link">⚡Sale</a>
              </li>
              <li className="site_nav_li">
                <a href="/bundle-deals" className="site_nav_link">🔥Bundle Deals</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`navbar_container_left_box_input_logo ${isHomePage ? "" : "text_black"}`}>
          <a href="/">
            <img src={logoSrc} alt="Logo" />
          </a>
        </div>
        <div className="navbar_container_right">
          <div className={`navbar_container_right_button ${isHomePage ? "" : "black_text"}`}>
            <Link to="/login">
              <FaRegUser />
            </Link>
          </div>
          <div className={`navbar_container_right_button ${isHomePage ? "" : "black_text"}`}>
            <Link to="/searchbar">
              <FaSearch />
            </Link>
          </div>
          <div className={`navbar_container_right_button ${isHomePage ? "" : "black_text"}`} onClick={toggleCartModal}>
            <div>
              <GrCart />
            </div>
          </div>
        </div>
      </div>
      {isCartOpen && <CartModal closeCartModal={toggleCartModal} />} 
    </div>
  );
};

export default NavBar;
