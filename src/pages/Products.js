import "./style.css"
import React from "react";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import image from "../assets/jew-shop.jpeg";

function Products() {
  const products = {};
    return (
      <>
      <Header title="You can find whatever you want." image={image}>
      </Header>
   <ProductList products={products}/>
    </>
    );
  }

  export default Products;