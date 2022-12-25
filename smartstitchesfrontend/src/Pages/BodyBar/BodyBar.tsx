import React from "react";
import "./BodyBar.css";
import { HashLink } from "react-router-hash-link";
import bodybarbackground from "../../Assets/BackgroundImages/contactus.jpeg";
function BodyBar() {
  return (
    <div className="body-bar-container">
      <img
        className="body-bar-background"
        src={bodybarbackground}
        alt="bodybarbackground"
      />
      <div className="body-bar-elements-container">
        <HashLink className="body-bar-elements" to="/#contact-us">
          CONTACT US
        </HashLink>

        <HashLink className="body-bar-elements" to="/#why-smart-stitches">
          WHY SMART STITCHES WITH LOVE
        </HashLink>
      </div>
    </div>
  );
}

export default BodyBar;
