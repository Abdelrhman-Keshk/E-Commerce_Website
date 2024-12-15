import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/icons/css/all.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  About,
  Contact,
  Login,
  Register,
  Cart,
  Checkout,
  PageNotFound,
} from "./pages";
import { MyNavbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/E-Commerce_Website/" element={<Home />} />
        <Route path="/E-Commerce_Website/products" element={<Products />} />
        <Route path="/E-Commerce_Website/about" element={<About />} />
        <Route path="/E-Commerce_Website/contact" element={<Contact />} />
        <Route path="/E-Commerce_Website/login" element={<Login />} />
        <Route path="/E-Commerce_Website/register" element={<Register />} />
        <Route path="/E-Commerce_Website/cart" element={<Cart />} />
        <Route path="/E-Commerce_Website/checkout" element={<Checkout />} />
        <Route path="/E-Commerce_Website/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
