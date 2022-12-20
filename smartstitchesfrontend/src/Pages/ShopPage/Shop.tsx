import React from "react";
import "./Shop.css";
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

export default function SHOP() {
  const products = [
    {
      name: "earrings",
      price: "250 $",
      description: "handmade",
      icon: itemone,
    },
    {
      name: "necklaces",
      price: " 200 $",
      description: "handmade",
      icon: itemtwo,
    },
    {
      name: "bracelets",
      price: " 350 $",
      description: "handmade",
      icon: itemthree,
    },
    {
      name: "earrings",
      price: " 250 $",
      description: "handmade",
      icon: itemfour,
    },
    {
      name: "necklaces",
      price: " 350 $",
      description: "handmade",
      icon: itemfive,
    },
    {
      name: "rings",
      price: " 300 $",
      description: "handmade",
      icon: itemsix,
    },
    {
      name: "rings",
      price: " 150 $",
      description: "handmade",
      icon: itemseven,
    },
  ];
  return (
    <>
      <div id="Shop">
        <div id="products" className="parent-relative">
          <div className="product-list-main-container">{/*productslist */}</div>
          <div className="products-main-container" id="products">
            <div className="products-list-container">
              {products.length > 0 &&
                products.map((product: any, index: number) => {
                  return (
                    <ProductCard
                      key={index}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      icon={product.icon}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
