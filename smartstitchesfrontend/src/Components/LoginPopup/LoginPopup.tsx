import React from "react";
import "./LoginPopup.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import { getAllProductsRequest } from "../../Store/Thunk/ProductsThunk";
import { getAllUsersRequest } from "../../Store/Thunk/UsersThunks";

type LogInProps = {
  closePopup: any;
};

function LogInPopup(props: LogInProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const users = useSelector((state: any) => state.UsersReducer);

  console.log("users", users);
  useEffect(() => {
    users.length <= 0 && dispatch(getAllUsersRequest());
  }, [dispatch]);

  const [isSaveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = () => {
    console.log("username", username);
    console.log("password", password);

    const userData = users.find((user: any) => user.username === username);

    if (userData.length == 0) {
      setSaveButtonDisabled(true);
      alert("Invalid Username");
    } else {
      if (userData.password != password) {
        alert("Wrong Password!");
      } else {
        props.closePopup();
        setSaveButtonDisabled(false);
        navigate("./products-management");
      }
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {/* Overlay */}
      <div onClick={props.closePopup} className="login-popup-overlay"></div>

      <div className="user-popup-content">
        <div className="user-popup-header">
          <Typography variant="h3" fontWeight="bold" color="primary">
            Log in
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
              label="Username"
              variant="outlined"
              fullWidth
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>

          <Grid xs={12} className="save-button-container">
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={handleOnSubmit}
              //disabled={isSaveButtonDisabled}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LogInPopup;
