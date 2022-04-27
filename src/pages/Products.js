import "../pages/style.css";
import React from "react";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import image from "../assets/about-header.jpg";
import { getProducts } from "../data/products";

function Products() {
        return (
    <>
      <Header
        title="Shop with us. Be confident with us"
        image={image}>
       
      </Header>

      <ProductList products={getProducts()} />
    </>
  )
  }


 export default Products;