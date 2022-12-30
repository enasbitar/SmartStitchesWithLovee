import React from "react";
import "./ProductCard.css";

type ProductCardProps = {
  key: any;
  image: string;
  title: string;
  description: string;
  category: string;
  price: number;
};
//

//
export default function ProductCard(props: ProductCardProps) {
  return (
    <>
      <div className="product-card-item">
        <img className="product-image" src={props.image} alt={props.title} />
        <div id={props.key}>
          <div className="product-card-name-description">
            <h2>{props.title}</h2>
            <p>
              <h3>Description : </h3>
              {props.description}
            </p>
            <p>
              <h3>Category : </h3>
              {props.category}
            </p>
            <p>
              <h3>Price : </h3>
              {props.price}
            </p>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
