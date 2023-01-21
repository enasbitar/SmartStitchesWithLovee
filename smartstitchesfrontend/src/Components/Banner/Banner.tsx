import React from "react";
import "./Banner.css";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import smartstitcheslogo from "../../Assets/BannerImages/Logo.png";
import searchbarlogo from "../../Assets/BannerImages/searchbaricon.png";
// import products from "../../Pages/ShopPage/Shop";
import LoginButton from "../LoginPopup/LoginPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import {
  getAllProductsRequest,
  deleteProductRequest,
} from "../../Store/Thunk/ProductsThunk";
import { filterableGridColumnsIdsSelector } from "@mui/x-data-grid";
// import ProductPopup from "../ProductPopup/ProductPopup";

type Product = {
  title: string;
  description: string;
  // Other properties of the product
};

function Banner({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: any;
}) {
  const products = useSelector((state: any) => state.ProductReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  //
  const [isLogInPopup, setLogInPopup] = useState(false);
  const closePopup = () => {
    setLogInPopup(false);
  };

  //
  useEffect(() => {
    products.length <= 0 && dispatch(getAllProductsRequest());
  }, [dispatch]);

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  //
  return (
    <>
     
      <div className="banner-container">
        <img
          className="banner-smart-stitches-logo"
          src={smartstitcheslogo}
          alt="Logo"
         
        />

        <h3 className="banner-declaration">
          THE ORDERS WON'T BE READY BEFORE 20 WORKING DAYS
        </h3>
        <div className="search-box-and-logo">
          <label>
            <input
              className="search-box"
              type="text"
              name="name"
              onInput={(event) => {
                handleSearchChange(event);
              }}
              // onKeyDown={(event) => {
              //  navigateToSection(event);
              // }}
            />
          </label>
          <HashLink to="/#Shop">
            <img className="search-bar-logo" src={searchbarlogo} alt="Logo" />
          </HashLink>
        </div>
      </div>
    </>
  );
}

export default Banner;
