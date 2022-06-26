import "./style.css";
import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/bestsellers-nav.webp";
function BestSellers() {
  return (
    <>
      <Header
        title="Here u can fond pur best products."
        image={image}
      ></Header>
    </>
  );
}

export default BestSellers;