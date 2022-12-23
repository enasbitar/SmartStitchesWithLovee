import { useEffect, useState } from "react";
import productservice from "../../Services/productservice";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsRequest,
  deleteProductRequest,
} from "../../Store/Thunk/ProductsThunk";

//components
import ProductPopup from "./ProductPopup/ProductPopup";
import DeletePopup from "../../Components/DeletePopup/DeletePopup";

//MUI modules
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../Components/Loader/Loader";
import MessageNotification from "../../Components/MessageNotification/MessageNotification";
import Header from "../../Components/Header/Header";

function ProductsManagement() {
  const dispatch = useDispatch<any>();

  //local state
  const [productPopup, setProductPopup] = useState({
    isProductPopup: false,
    id: "",
  });
  const [deletePopup, setDeletePopup] = useState({
    isDeletePopup: false,
    id: "",
    title: "",
  });

  //redux state
  const products = useSelector((state: any) => state.ProductReducer);
  const loading = useSelector((state: any) => state.LoadingReducer);
  const { messageText, messageType } = useSelector(
    (state: any) => state.MessageReducer
  );

  console.log("loading", loading);
  console.log("products: ", products);

  useEffect(() => {
    products.length <= 0 && dispatch(getAllProductsRequest());
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.2 },
    {
      field: "title",
      headerName: "title",
      flex: 1,
      editable: true,
    },
    {
      field: "description",
      headerName: "description",
      flex: 1,
      editable: true,
    },
    {
      field: "Actions",
      headerName: "Actions",
      flex: 0.3,
      renderCell: (row: any) => {
        return (
          <>
            <IconButton
              size="large"
              title="Edit Product"
              onClick={() => {
                setProductPopup({
                  ...productPopup,
                  isProductPopup: true,
                  id: row.row.id,
                });
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              size="large"
              title="Delete Product"
              onClick={() =>
                setDeletePopup({
                  isDeletePopup: true,
                  id: row.row.id,
                  title: row.row.title,
                })
              }
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const closePopup = () => {
    setProductPopup({ isProductPopup: false, id: "" });
    setDeletePopup({ isDeletePopup: false, id: "", title: "" });
  };

  return (
    <>
      <Header />
      {loading ? <Loader /> : null}
      {messageText ? (
        <MessageNotification
          messageText={messageText}
          messageType={messageType}
        />
      ) : null}
      {productPopup.isProductPopup ? (
        <ProductPopup closePopup={closePopup} id={productPopup.id} />
      ) : null}
      {deletePopup.isDeletePopup ? (
        <DeletePopup
          closePopup={closePopup}
          id={deletePopup.id}
          name={deletePopup.title}
        />
      ) : null}
      <div>
        <h1 className="titles">Products Management</h1>
        <div className="button-container">
          <Button
            onClick={() =>
              setProductPopup({
                ...productPopup,
                isProductPopup: true,
              })
            }
            className="create-button"
            color="primary"
            variant="contained"
          >
            {" "}
            Create Product
          </Button>
        </div>

        <Box sx={{ height: 1000, width: "100%" }}>
          <DataGrid
            rows={products}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[30]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    </>
  );
}

export default ProductsManagement;
