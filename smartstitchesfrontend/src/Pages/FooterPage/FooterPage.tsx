import React from "react";
import "./FooterPage.css";
import footerimage from "../../Assets/BackgroundImages/footerimage.jpeg";
import smartstitcheslogo from "../../Assets/BannerImages/Logo.png";
import LoginButton from "../../Components/LoginPopup/LoginPopup";

import { useRef, useEffect, useState, ChangeEvent } from "react";
import {
  getAllProductsRequest,
  deleteProductRequest,
} from "../../Store/Thunk/ProductsThunk";
import LoginPopup from "../../Components/LoginPopup/LoginPopup";

function FooterPage() {
  const [isLogInPopup, setLogInPopup] = useState(false);
  const closePopup = () => {
    setLogInPopup(false);
  };
  return (
    <>
      {isLogInPopup ? <LoginPopup closePopup={closePopup} /> : null}
      {/* {isProductPopup ? <ProductPopup closePopup={closePopup} /> : null} */}

      <div className="footer-page-container">
        <div className="footer-page-section">
          <div>
            <img
              className="footer-section-background"
              src={footerimage}
              alt="Lofooterimagego"
            />
          </div>
          <div className="footer-logo-and-quote">
            <img
              className="footer-smart-stitches-logo"
              src={smartstitcheslogo}
              alt="Logo"
              onClick={() => {
                setLogInPopup(true);
              }}
            />
            <h3 className="footer-quote">Hand made with Love</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterPage;
