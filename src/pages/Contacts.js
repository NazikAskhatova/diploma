import "./style.css"
import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/contacts-header.jpg";
function Contacts() {
    return (
      <>
      <Header title="Find our contacts" image={image}></Header>
    </>
    );
  }

  export default Contacts;