import "./style.css"
import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/contacts.jpeg";
function Shop() {
    return (
      <>
      <Header title="  You can shop with us undoubtedly." image={image}></Header>
    </>
    );
  }

  export default Shop;