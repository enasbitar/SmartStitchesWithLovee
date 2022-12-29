import React from "react";
import "./Banner.css";
import { useRef, useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import smartstitcheslogo from "../../Assets/BannerImages/Logo.png";
import searchbarlogo from "../../Assets/BannerImages/searchbaricon.png";
import LoginPopup from "../LoginPopup/LoginPopup";
import { products } from "../../Pages/ShopPage/Shop";
import {
  getAllProductsRequest,
  deleteProductRequest,
} from "../../Store/Thunk/ProductsThunk";
import { useDispatch, useSelector } from "react-redux";

function Banner() {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const [isLogInPopup, setLogInPopup] = useState(false);
  const closePopup = () => {
    setLogInPopup(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const [elements, setElements] = useState<Element[]>([]);
    const [filteredElements, setFilteredElements] = useState<Element[]>([]);
    console.log(products, "daniel");

    // useEffect(() => {
    //   products.length <= 0 && dispatch(getAllProductsRequest());
    // }, [dispatch]);
    // console.log(dispatch);

    const handleSearchChange = (event: any) => {
      let value = event.target.value;
      let newArray = [] as any;
      var filteredProducts = newArray;

      products.filter((product: any, index: any) => {
        if (product.name.toLowerCase().includes(value.toLowerCase())) {
          newArray.push(filteredProducts(index));
        }
        return true;
      });
      return newArray;
    };

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
  };
}

export default Banner;
function dispatch(arg0: (dispatch: any) => void) {
  throw new Error("Function not implemented.");
}
