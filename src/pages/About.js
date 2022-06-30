import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/header-jw.jpg";
import AboutPage from "../components/AboutPage/AboutPage";
function About() {
  return (
    <>
      <Header
        image={image}
      ></Header>
      <AboutPage/>
    </>
  );
}

export default About;
