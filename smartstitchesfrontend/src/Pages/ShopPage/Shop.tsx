import "./Shop.css";
import React, { useCallback, useState, useEffect } from "react";
//component
import ProductCard from "./ProductCard/ProductCard";
import Carousel from "react-material-ui-carousel";

async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}

export default function SHOP() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const products = await getData();
      setProducts(products);
    }
    fetchData();
  }, []);
  //
  const [activeChild, setActiveChild] = useState(0);

  const changeChild = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveChild((a) => (a - 1 < 0 ? products.length - 1 : a - 1));
        console.log("hi");
      } else if (e.key === "ArrowRight") {
        setActiveChild((a) => (a + 1 > products.length - 1 ? 0 : a + 1));

        console.log("heloo");
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
              index={activeChild}
              autoPlay={false}
              navButtonsAlwaysVisible
            >
              {products.map((product: any, index: number) => {
                return (
                  <>
                    <div>
                      <ProductCard
                        icon={product.icon}
                        key={index}
                        title={product.title}
                        description={product.description}
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
