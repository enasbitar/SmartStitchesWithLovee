import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ProductManagement from "./Pages/ProductsManagement/ProductManagement";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products-management" element={<ProductManagement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
