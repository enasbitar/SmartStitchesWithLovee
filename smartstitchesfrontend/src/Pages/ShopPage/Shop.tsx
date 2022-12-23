import "./Shop.css";
import React, { useState, useEffect } from "react";
//component
import ProductCard from "./ProductCard/ProductCard";
//images
import itemone from "../../Assets/ProductsImages/productimageone.jpg";
import itemtwo from "../../Assets/ProductsImages/productimageone.jpg";
import itemthree from "../../Assets/ProductsImages/productimageone.jpg";
import itemfour from "../../Assets/ProductsImages/productimageone.jpg";
import itemfive from "../../Assets/ProductsImages/productimageone.jpg";
import itemsix from "../../Assets/ProductsImages/productimageone.jpg";
import itemseven from "../../Assets/ProductsImages/productimageone.jpg";

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

  return (
    <>
      {" "}
      <div className="products-container">
        <div className="our-products-bar">
          <h1 className="shop-title"> SHOP </h1>
        </div>
        <div id="Shop" className="products-list-container ">
          {products.length > 0 &&
            products.map((product: any, index: number) => {
              return (
                <>
                  <ProductCard
                    icon={product.icon}
                    key={index}
                    title={product.title}
                    description={product.description}
                  />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
