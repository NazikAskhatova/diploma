import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import Header from "./components/Header/Header";
// import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import About from "./pages/About";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Layout>

    
    </div>
  );
}

export default App;
