import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import "./ProductPopup.css";
import CloseIcon from "@mui/icons-material/Close";

import {
  createProductRequest,
  updateProductRequest,
} from "../../../Store/Thunk/ProductsThunk";
import { useDispatch, useSelector } from "react-redux";

type ProductPopupProps = {
  id?: string;
  closePopup: any;
};

type ProductState = {
  name: string;
  description: string;
};

export default function ProductPopup(props: ProductPopupProps) {
  const products = useSelector((state: any) => state.ProductsReducer);
  const dispatch = useDispatch<any>();

  //local state
  const [product, setProduct] = useState<ProductState>({
    name: "",
    description: "",
  });

  const getProductById = () => {
    return products.filter((product: any, index: number) => {
      if (product.id == props.id) {
        setProduct(products[index]);
      }
    });
  };
  useEffect(() => {
    getProductById();
  }, []);

  const handleOnNameChange = (event: any) => {
    let value = event.target.value;
    setProduct({ ...product, name: value });
  };

  const handleOnDescriptionChange = (event: any) => {
    let value = event.target.value;
    setProduct({ ...product, description: value });
  };

  const [isSaveButtonDisabled, setSaveButtonDisabled] = useState(false);

  const validator = () => {
    if (product.name === "" || product.description === "") {
      setSaveButtonDisabled(true);
    } else {
      setSaveButtonDisabled(false);
    }
  };
  useEffect(() => {
    validator();
  }, [product]);

  //email validator regx

  const handleOnSubmit = () => {
    props.id
      ? dispatch(
          updateProductRequest(
            props.id,
            { name: product.name, description: product.description },
            props.closePopup
          )
        )
      : dispatch(createProductRequest(product, props.closePopup));
  };

  return (
    <div className="product-pop-up-container">
      {/* Overlay */}
      <div onClick={props.closePopup} className="product-popup-overlay"></div>
      <div className="product-popup-content">
        {/* Popup header */}
        <div className="product-popup-header">
          <Typography variant="h3" fontWeight="bold" color="primary">
            {props.id ? "Update Product" : "Create Product"}
          </Typography>
          <IconButton
            size="large"
            title="close icon"
            color="error"
            onClick={props.closePopup}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              name="name"
              value={product.name}
              onChange={handleOnNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Product Description"
              variant="outlined"
              fullWidth
              name="Description"
              value={product.description}
              onChange={handleOnDescriptionChange}
            />
          </Grid>
          <Grid xs={12} className="save-button-container">
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={handleOnSubmit}
              disabled={isSaveButtonDisabled}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
