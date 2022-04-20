import "./style.css"
import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/jewellery_header.webp";
function About() {
    return (
      <>
      <Header title="About our talented team and company." image={image}> You can connect with us.</Header>
    </>
    );
  }
  
  export default About;