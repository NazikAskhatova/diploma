import "./style.css"
import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/jew-shop.jpeg";

function Products() {
    return (
      <>
      <Header title="You can find whatever you want." image={image}></Header>
    </>
    );
  }

  export default Products;