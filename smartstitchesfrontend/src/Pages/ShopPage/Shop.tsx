import React, { useRef, useState } from "react";

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
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: itemone,
    },
    {
      name: "necklaces",
      price: " 200 $",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: itemtwo,
    },
    {
      name: "bracelets",
      price: " 350 $",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: itemthree,
    },
    {
      name: "earrings",
      price: " 250 $",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: itemfour,
    },
    {
      name: "necklaces",
      price: " 350 $",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: itemfive,
    },
    {
      name: "rings",
      price: " 300 $",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: itemsix,
    },
    {
      name: "rings",
      price: " 150 $",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: itemseven,
    },
  ];

  return (
    <>
      {" "}
      <div className="products-container">
        <div id="Shop" className="our-products-bar">
          <h1 className="shop-title"> SHOP </h1>
        </div>
        <div className="products-list-container ">
          {products.length > 0 &&
            products.map((product: any, index: number) => {
              return (
                <>
                  <ProductCard
                    key={index}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    icon={product.icon}
                  />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
