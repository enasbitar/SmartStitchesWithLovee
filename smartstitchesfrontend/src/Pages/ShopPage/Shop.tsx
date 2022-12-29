import "./Shop.css";
import React, { useCallback, useState, useEffect } from "react";
//component
import ProductCard from "./ProductCard/ProductCard";
import Carousel from "react-material-ui-carousel";
import handleSearchChange from "../../Components/Banner/Banner";
import { getAllProductsRequest } from "../../Store/Thunk/ProductsThunk";
import ProductsService from "../../Services/productservice";

// type Props = {
//   dispatch: (arg0: any) => void;
// };
// const arr = Object.entries(products);

// const arr = Object.keys(products).map((key) => [key, products[key]]);
// const arr = [];
// for (const key in products) {
//   arr.push([key, products[key]]);
// };
function dispatch(arg0: (dispatch: any) => void) {}
export var products = []
export default function SHOP() {
  useEffect(() => {
    products.length <= 0 && dispatch(getAllProductsRequest());
  }, [dispatch]);
  console.log(dispatch);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      var productsData = getAllProductsRequest();
      console.log(productsData);
      // setProducts(productsData);
    }
    fetchData();
  }, []);
  //
  const [activeChild, setActiveChild] = useState(0);

  const changeChild = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveChild((a) => (a - 1 < 0 ? products.length - 1 : a - 1));
        console.log("pi");
      } else if (e.key === "ArrowRight") {
        setActiveChild((a) => (a + 1 > products.length - 1 ? 0 : a + 1));

        console.log("fii");
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
