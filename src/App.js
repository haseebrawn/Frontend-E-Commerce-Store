import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import CheckoutPage from "./components/Checkout Page/CheckoutPage";
import CartModal from "./components/Cart Modal/CartModal";
import BestSellers from "./components/Best Sellers/BestSellers";
import Trousers from "./components/Trousers/Trousers";
import TShirts from "./components/T-Shirts/TShirts";
import Sweatshirts from "./components/Sweatshirts/Sweatshirts";
import SummerTwinsets from "./components/Summer Twinsets/SummerTwinsets";

function App() {
  const location = useLocation();  // Get the current location

  const isCheckoutPage = location.pathname.includes("/checkout");  // Check if the path is checkout

  return (
    <>
      {/* Conditionally apply the layout */}
      {!isCheckoutPage && (
        <div className="app_main_div">
          <NavBar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
          </Routes>
        </div>
      )}

      {/* Routes for the rest of the app */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Category />
              <TShirts />
             <Trousers />
              <FullSleeveTShirts />
              <Slider />
              <ShopNow />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/terms-of-service" element={<Services />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/collections/men-tops" element={<MenTops />} />
        <Route path="/collections/men-bottoms" element={<MenBottoms />} />
        <Route path="/collections/sale" element={<Sale />} />
        <Route path="/collection/bundle-deals" element={<BundleDeals />} />
        <Route path="/collections/full-sleeve-t-shirts" element={<FullSleeveTShirts />} />
        <Route path="/collections/shorts" element={<Shorts />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout/:id" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartModal />}/>
        <Route path="/collections/best-sellers" element={<BestSellers />}/>
        <Route path="/collections/trousers" element={<Trousers />} />
        <Route path="/collections/t-shirts" element={<TShirts />} />
        <Route path="/collections/sweatshirts" element={<Sweatshirts />} />
        <Route path="/collections/twinsets" element={<SummerTwinsets />} />
        <Route path="/collections/summer-twinsets" element={<SummerTwinsets />}/>
      </Routes>

      {/* Conditionally render Footer */}
      {!isCheckoutPage && <Footer />}
    </>
  );
}

export default function MainApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
