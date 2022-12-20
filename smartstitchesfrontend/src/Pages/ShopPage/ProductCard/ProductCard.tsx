import React from "react";
import "./ProductCard.css";

type ProductCardProps = {
  icon: any;
  name: string;
  description: string;
  price: string;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="product-card-item">
      <img className="product-image" src={props.icon} alt={props.name} />
      <div className="product-card-name-description">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <h2>{props.price}</h2>
      </div>
    </div>
  );
}
