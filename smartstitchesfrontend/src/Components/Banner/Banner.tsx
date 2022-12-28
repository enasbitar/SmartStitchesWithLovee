import React from "react";
import "./Banner.css";
import { useRef, useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import smartstitcheslogo from "../../Assets/BannerImages/Logo.png";
import searchbarlogo from "../../Assets/BannerImages/searchbaricon.png";
import products from "../../Pages/ShopPage/Shop";

interface APIResponse {
  elements: Element[];
}

interface Element {
  title: string;
}

/*
function Found() {
  const [products, setProducts] = useState("");
  const handelProductChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("haha");
  };
  return <input onChange={handelProductChange} value={products} />;
}
*/
function Banner() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [elements, setElements] = useState<Element[]>([]);
  const [filteredElements, setFilteredElements] = useState<Element[]>([]);
  var dataElement: any;
  useEffect(() => {
    async function fetchElements() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = (await response.json()) as APIResponse;
      setElements(data.elements);
      return data;
    }
    dataElement = fetchElements();
  }, []);

  const handleSearchChange = (event: any) => {
    let value = event.target.value;
    let newArray = [] as any;

    const searched_products = dataElement.find((product: any, index: any) => {
      if (product.name.toLowerCase().includes(value.toLowerCase())) {
        newArray.push(product(index));
      }
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
