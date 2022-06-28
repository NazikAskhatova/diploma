import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Product from "./pages/Product";
import Products from "./pages/ShopProducts";
import About from "./pages/About";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CheckOut from "./pages/CheckOut";
import Auth from "./pages/Auth";
import BestSellers from "./pages/BestSellers";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "cart/restore" });

  }, [dispatch]);


  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/bestsellers" element={<BestSellers />} />
         
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
