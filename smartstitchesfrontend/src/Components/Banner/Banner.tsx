import React from "react";
import "./Banner.css";
import { useRef, useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import smartstitcheslogo from "../../Assets/BannerImages/Logo.png";
import searchbarlogo from "../../Assets/BannerImages/searchbaricon.png";
import {products} from "../../Pages/ShopPage/Shop";
import {
  getAllProductsRequest,
  deleteProductRequest,
} from "../../Store/Thunk/ProductsThunk";
import { useDispatch, useSelector } from "react-redux";

interface APIResponse {
  elements: Element[];
}

interface Element {
  title: string;
}

function Banner() {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
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

  function handleInput(event: React.FormEvent<HTMLInputElement>) {
    const query = event.currentTarget.value;
    const filtered = elements.filter((element) =>
      element.title.includes(query)
    );
    setFilteredElements(filtered);
  }
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
        <label>
          <input
            className="search-box"
            type="text"
            name="name"
            ref={inputRef}
            onInput={handleInput}
            onChange={handleSearchChange}
          />{" "}
          <div>
            {filteredElements.map((element) => (
              <div key={element.title}>{element.title}</div>
            ))}
          </div>
        </label>
        <img className="search-bar-logo" src={searchbarlogo} alt="Logo" />
      </div>
    </div>
  );
}

export default Banner;
function dispatch(arg0: (dispatch: any) => void) {
  throw new Error("Function not implemented.");
}
