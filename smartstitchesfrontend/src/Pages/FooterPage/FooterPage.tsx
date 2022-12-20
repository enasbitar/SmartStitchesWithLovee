import React from "react";
import "./FooterPage.css";
import footerimage from "../../Assets/BackgroundImages/footerimage.jpeg";
import smartstitcheslogo from "../../Assets/BannerImages/Logo.png";

function FooterPage() {
  return (
    <div>
      <div className="footer-page-section">
        <img
          className="footer-section-background"
          src={footerimage}
          alt="Lofooterimagego"
        />

        <div>
          <img
            className="footer-smart-stitches-logo"
            src={smartstitcheslogo}
            alt="Logo"
          />
        </div>
        <div className="hand-made-with-love">
          <h3>HAND MADE</h3>
          <h3>WITH LOVE</h3>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
