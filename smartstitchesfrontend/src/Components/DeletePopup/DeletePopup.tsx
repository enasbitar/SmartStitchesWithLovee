import "./DeletePopup.css";
import { useDispatch } from "react-redux";

// MUI
import { Button } from "@mui/material";

// thunks
import { deleteProductRequest } from "../../Store/Thunk/ProductsThunk";

type DeletePopupProp = {
  id: string;
  name: string;
  closePopup: any;
};

function DeletePopup(props: DeletePopupProp) {
  const dispatch = useDispatch<any>();

  return (
    <div>
      <div onClick={props.closePopup} className="delete-popup-overlay"></div>

      <div className="delete-popup-content">
        <h2>Are you sure you want to delete {props.name} product?</h2>
        <div className="delete-popup-header">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={props.closePopup}
          >
            Cancel
          </Button>
          <Button
            color="error"
            variant="contained"
            type="submit"
            onClick={() =>
              dispatch(deleteProductRequest(props.id, props.closePopup))
            }
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
