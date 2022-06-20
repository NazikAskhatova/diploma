import "./style.css";
import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/pages-header.jpg";
function About() {
  return (
    <>
      <Header
        title="About our talented team and company."
        image={image}
      ></Header>
    </>
  );
}

export default About;
