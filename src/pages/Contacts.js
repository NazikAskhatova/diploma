import "./style.css"
import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/jew-shop.jpeg";
function Contacts() {
    return (
      <>
      <Header title="Here you can find our contacts and social media." image={image}> You can connect with us.</Header>
    </>
    );
  }

  export default Contacts;