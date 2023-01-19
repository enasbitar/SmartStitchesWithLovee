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
              <>Description : </>
              {props.description}
            </p>
            <p>
              <>brand : </>
              {props.brand}
            </p>
            <p>
              <>color : </>
              {props.color}
            </p>
            <p>
              <>size : </>
              {props.size}
            </p>
            <p>
              <>composition : </>
              {props.composition}
            </p>
            <p>
              <>quantity : </>
              {props.quantity}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
