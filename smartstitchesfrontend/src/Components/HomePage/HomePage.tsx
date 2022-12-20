import React from "react";
import "./HomePage.css";

import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import WhySmartStitches from "../../Pages/WhySmartStitches/WhySmartStitches";
import ShopPage from "../../Pages/ShopPage/Shop";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Footer from "../../Pages/FooterPage/FooterPage";

function HomePage() {
  return (
    <div>
      <Banner />
      <Header />
      <WhySmartStitches />
      <ShopPage />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default HomePage;
