import React from "react";
import "./ContactUs.css";
import contactusbackground from "../../Assets/BackgroundImages/bodybarbackground.jpg";
function ContactUs() {
  return (
    <div id="contact-us" className="contact-us-container">
      <img className="contact-us-image" src={contactusbackground} alt="Logo" />

      <div className="contact-us-bar">
        <h1 className="contact-us-title">CONTACT US</h1>
        <h3>
          <a
            className="email-to-smart-stitches"
            href="mailto:SMARTSTITCHESWITH@GMAIL.COM"
          >
            EMAIL:SMARTSTITCHESWITHLOVE@GMAIL.COM
          </a>
        </h3>
      </div>
    </div>
  );
}

export default ContactUs;
