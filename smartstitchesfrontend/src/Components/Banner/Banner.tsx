import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
import smartstitcheslogo from "../../Assets/BannerImages/Logo.png";
import searchbarlogo from "../../Assets/BannerImages/searchbaricon.png";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="banner-container">
      <img
        className="banner-smart-stitches-logo"
        src={smartstitcheslogo}
        alt="Logo"
        onClick={() => navigate("/products-management")}
      />

      <h3 className="banner-declaration">
        THE ORDERS WON'T BE READY BEFORE 20 WORKING DAYS
      </h3>
      <div className="search-box-and-logo">
        <label className="search-box">
          <input type="text" name="name" />
        </label>
        <img className="search-bar-logo" src={searchbarlogo} alt="Logo" />
      </div>
    </div>
  );
}

export default Banner;
