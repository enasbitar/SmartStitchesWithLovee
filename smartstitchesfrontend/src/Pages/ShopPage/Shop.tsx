import "./Shop.css";
import React, { useCallback, useState, useEffect } from "react";
//component
import ProductCard from "./ProductCard/ProductCard";
import Carousel from "react-material-ui-carousel";
import data from "../../Helpers/jsonAPI.json";
import { useSelector } from "react-redux";
/*async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}*/

export default function SHOP({ searchValue }: { searchValue: string }) {
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

  const filterProducts = (searchValue: string, products: any) => {
    const value = searchValue;
    let filteredProducts = [...products];
    if (value) {
      const regex = new RegExp(value, "gi");
      filteredProducts = products.filter(
        (products: any) =>
          products.title.match(regex) || products.description.match(regex)
      );
    }
    console.log(filteredProducts);
    return filteredProducts;
  };

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
              {filterProducts(searchValue, products) &&
                filterProducts(searchValue, products).map(
                  (product: any, index: number) => {
                    return (
                      <>
                        <div>
                          <ProductCard
                            image={product.image}
                            key={index}
                            title={product.title}
                            description={product.description}
                            brand={product.brand}
                            color={product.color}
                            size={product.size}
                            composition={product.composition}
                            quantity={product.quantity}
                          />
                        </div>
                      </>
                    );
                  }
                )}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
