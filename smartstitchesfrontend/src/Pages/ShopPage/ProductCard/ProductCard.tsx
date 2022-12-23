import React from "react";
import "./ProductCard.css";

type ProductCardProps = {
  key: any;
  icon: any;
  title: string;
  description: string;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <>
      <div className="product-card-item">
        <img className="product-image" src={props.icon} alt={props.title} />
        <div id={props.key}>
          <div className="product-card-name-description">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
