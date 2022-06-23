import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Product from "./pages/Product/Product";
// import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Cart from "./pages/Cart/Cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CheckOut from "./pages/CheckOut";
import Auth from "./pages/Auth";


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
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
