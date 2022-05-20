import "./style.css"
import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/categories-navbar-2.jpg";
function Shop() {
    return (
      <>
      <Header title="Find whatever you want" image={image}></Header>
    </>
    );
  }

  export default Shop;