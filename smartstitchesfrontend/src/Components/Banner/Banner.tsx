import React from "react";
import "./Banner.css";
import { useRef, useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import smartstitcheslogo from "../../Assets/BannerImages/Logo.png";
import searchbarlogo from "../../Assets/BannerImages/searchbaricon.png";
import products from "../../Pages/ShopPage/Shop";
import LoginButton from "../LoginPopup/LoginPopup";
import LoginPopup from "../LoginPopup/LoginPopup";

interface APIResponse {
  elements: Element[];
}

interface Element {
  title: string;
}

function Banner() {
  const navigate = useNavigate();
  const [isLogInPopup, setLogInPopup] = useState(false);
  const closePopup = () => {
    setLogInPopup(false);
  };

  /*  const handleSearchChange = (event: any) => {
    let value = event.target.value;

    let newArray: any = [];
    products.find((e, index) => {
      if (e.name.toLowerCase().includes(value.toLowerCase())) {
        newArray.push(products[index]);
      }
    });
    console.log("newArray: ", newArray);

    setTempProducts(newArray);
  };
*/
  return (
    <>
      {console.log("meassge", isLogInPopup)}
      {isLogInPopup ? <LoginPopup closePopup={closePopup} /> : null}
      {console.log("meassge", isLogInPopup)}
      <div className="banner-container">
        <img
          className="banner-smart-stitches-logo"
          src={smartstitcheslogo}
          alt="Logo"
          onClick={() => {
            setLogInPopup(true);
          }}
        />

        <h3 className="banner-declaration">
          THE ORDERS WON'T BE READY BEFORE 20 WORKING DAYS
        </h3>
        <div className="search-box-and-logo">
          <label>
            <input className="search-box" type="text" name="name" />
          </label>
          <img className="search-bar-logo" src={searchbarlogo} alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default Banner;
