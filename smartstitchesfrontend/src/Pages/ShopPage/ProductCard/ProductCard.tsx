import React from "react";
import "./ProductCard.css";

type ProductCardProps = {
  key: any;
  image: string;
  title: string;
  description: string;
  brand: number;
  color: string;
  size: number;
  composition: string;
  quantity: string;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <>
      <div className="product-card-item">
        <img className="product-image" src={props.image} alt={props.title} />
        <div id={props.key}>
          <div className="product-card-name-description">
            <h3>{props.title}</h3>
            <p>
              <h4>Description : </h4>
              {props.description}
            </p>
            <p>
              <h4>brand : </h4>
              {props.brand}
            </p>
            <p>
              <h4>color : </h4>
              {props.color}
            </p>
            <p>
              <h4>size : </h4>
              {props.size}
            </p>
            <p>
              <h4>composition : </h4>
              {props.composition}
            </p>
            <p>
              <h4>quantity : </h4>
              {props.quantity}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
