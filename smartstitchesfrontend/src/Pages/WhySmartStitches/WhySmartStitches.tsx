import React from "react";
import "./WhySmartStitches.css";
import whybackgroundimage from "../../Assets/BackgroundImages/aboutusicon.png";

function WhySmartStitches() {
  return (
    <div id="why-smart-stitches" className="why-smart-stitches-container">
      <div>
        <h2 className="about-us-quote">
          “Don’t find customers for your products, find products for your
          customers.”
          <h5 className="about-us-author-name">Seth Godin </h5>
        </h2>

        <h2 className="about-us-goals-container">
          <ol>
            <li className="about-us-goals">
              We are at your service for any customized handmade gift.
            </li>
            <li className="about-us-goals">
              We always work with love, to keep our customers satisfied.
            </li>
            <li className="about-us-goals">We are developing our work.</li>
          </ol>
        </h2>
        <div className="thankyou-whysmartstitchesicon">
          <h1 className="thank-you-note">
            THANK YOU FOR CHOOSING SMART STITCHES WITH LOVE
          </h1>
          <img
            className="why-smart-stitches-background-image"
            src={whybackgroundimage}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default WhySmartStitches;
