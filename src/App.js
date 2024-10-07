import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./Pages/HeroSection/HeroSection";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./Pages/About us/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Category from "./Pages/Category/Category";
import ShopNow from "./Pages/Subscribe/ShopNow";
import RefundPolicy from "./Pages/Refund-Policy/RefundPolicy";
import ShippingPolicy from "./Pages/Shipping Policy/ShippingPolicy";
import Services from "./Pages/Services/Services";
import PrivacyPolicy from "./Pages/Privacy Policy/PrivacyPolicy";
import MenTops from "./components/Men Tops/MenTops";
import "bootstrap/dist/css/bootstrap.min.css";
import MenBottoms from "./components/Men Bottoms/MenBottoms";
import Sale from "./components/Sale/Sale";
import BundleDeals from "./components/Bundle Deals/BundleDeals";
import FullSleeveTShirts from "./components/Full Sleeve T-Shirts/FullSleeveTShirts";
import Shorts from "./components/Shorts/Shorts";
import Slider from "./Pages/Slider/Slider";
import ProductDetail from "./components/Product Detail/ProductDetail";
import CartModal from "./components/Cart Modal/CartModal";

function App() {
  return (
    <BrowserRouter>
        <div className="app_main_div">
        <NavBar />
        <Routes>
            <Route path="/" element={<HeroSection />} />
        </Routes>
      </div>
      <Routes>
          <Route path="/" element={
            <>
              <Category />
              <FullSleeveTShirts />
              <Slider />
              <ShopNow />
            </>
          }/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/searchbar" element={<SearchBar />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/terms-of-service" element={<Services />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/men-tops" element={<MenTops />} />
          <Route path="/men-bottoms" element={<MenBottoms />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/bundle-deals" element={<BundleDeals />} />
          <Route path="/full-sleeve-t-shirts" element={<FullSleeveTShirts />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* <Route path="/cartModal" element={<CartModal />}/> */}
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
