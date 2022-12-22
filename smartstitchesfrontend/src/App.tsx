import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SHOP from "./Pages/ShopPage/Shop";
import WhySmartStitches from "./Pages/WhySmartStitches/WhySmartStitches";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
