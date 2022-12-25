import React from "react";
import "./FooterPage.css";
import footerimage from "../../Assets/BackgroundImages/footerimage.jpeg";
import smartstitcheslogo from "../../Assets/BannerImages/Logo.png";

function FooterPage() {
  return (
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
          />
          <h3 className="footer-quote">HAND MADE WITH LOVE</h3>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
