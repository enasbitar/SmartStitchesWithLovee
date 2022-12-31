import React, { useState } from "react";
import "./HomePage.css";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import WhySmartStitches from "../../Pages/WhySmartStitches/WhySmartStitches";
import Shop from "../../Pages/ShopPage/Shop";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Footer from "../../Pages/FooterPage/FooterPage";
import BodyBar from "../../Pages/BodyBar/BodyBar";

function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="homepage">
      <Banner searchValue={searchValue} setSearchValue={setSearchValue} />
      <Header />
      <WhySmartStitches />
      <Shop searchValue={searchValue} />
      <ContactUs />
      <BodyBar />
      <Footer />
    </div>
  );
}

export default HomePage;
