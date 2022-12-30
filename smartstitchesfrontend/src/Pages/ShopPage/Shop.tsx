import "./Shop.css";
import React, { useCallback, useState, useEffect } from "react";
//component
import ProductCard from "./ProductCard/ProductCard";
import Carousel from "react-material-ui-carousel";
import handleSearchChange from "../../Components/Banner/Banner";
import data from "../../Helpers/jsonAPI.json";
/*async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}*/

export default function SHOP() {
  /*const [products, setProducts] = useState([]);
 useEffect(() => {
    async function fetchData() {
      const products = await getData();
      setProducts(products);
    }
    fetchData();
  }, []);*/
  //
  const products = data["products"];

  const [activeChild, setActiveChild] = useState(0);

  const changeChild = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveChild((a) => (a - 1 < 0 ? products.length - 1 : a - 1));
        console.log("hi");
      } else if (e.key === "ArrowRight") {
        setActiveChild((a) => (a + 1 > products.length - 1 ? 0 : a + 1));

        console.log("helloo");
      }
    },
    [products]
  );
  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });

  //
  return (
    <>
      {" "}
      <div className="our-products-bar">
        <h1 className="shop-title"> SHOP </h1>
      </div>{" "}
      <div className="products-container">
        <div>
          <div id="Shop" className="carrousel ">
            <Carousel
              className="scrolling-wrapper"
              index={activeChild}
              autoPlay={false}
              navButtonsAlwaysVisible
            >
              {products.map((product: any, index: number) => {
                return (
                  <>
                    <div>
                      <ProductCard
                        image={product.image}
                        key={index}
                        title={product.title}
                        description={product.description}
                        category={product.category}
                        price={product.price}
                      />
                    </div>
                  </>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
