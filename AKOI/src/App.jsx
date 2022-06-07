import { ProductPage } from "./Components/Product.jsx";
import "./App.css";
import { NavBar } from "./Components/Navbar";
import Tab from "./Components/image.jsx";
import { Login } from "./Components/Login.jsx";
import { Signup } from "./Components/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Tab />
      <ProductPage />
      <Tab />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
