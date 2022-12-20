import React from "react";
import "./ContactUs.css";
import contactusbackground from "../../Assets/BackgroundImages/contactus.jpeg";

function ContactUs() {
  return (
    <div>
      <div className="contact-us-section">
        <img
          className="contact-us-section-background"
          src={contactusbackground}
          alt="Logo"
        />
      </div>
      <div className="contact-us-division">
        <h1>CONTACT US</h1>
      </div>
    </div>
  );
}

export default ContactUs;
