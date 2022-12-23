import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProductsRequest } from "../../Store/Thunk/ProductsThunk";
import "./Shop.css";
//component
import ProductCard from "./ProductCard/ProductCard";
//images
import itemone from "../../Assets/ProductsImages/productimageone.jpg";
import itemtwo from "../../Assets/ProductsImages/productimageone.jpg";

export default function SHOP() {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  //local state
  {
    /*  const [teacherPopup, setTeacherPopup] = useState({
    isTeacherPopup: false,
    id: " ",
  });
  const [deletePopup, setDeletePopup] = useState({
    isDeletePopup: false,
    id: " ",
    name: " ",
  });
*/
  }
  //redux state
  const products = useSelector((state: any) => state.ProductReducer);
  const loading = useSelector((state: any) => state.LoadingReducer);
  const { messageText, messageType } = useSelector(
    (state: any) => state.MessageReducer
  );

  useEffect(() => {
    // dispatch a thunk
    products.length <= 0 && dispatch(getAllProducts());
  }, [dispatch]);

  const products = [];

  return (
    <>
      <div className="products-container">
        <div className="our-products-bar">
          <h1 className="shop-title"> SHOP </h1>
        </div>
        <div className="products-list-container " id="Shop">
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
