import React from "react";
import "./Header.css";
import headerImage from "../../assets/jewellery_header.webp";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`
  };

  return (
    <header className="Header" style={style}>
      <h1 className="first-art">Our Jewellery Is Art.</h1>
      <p className="second-art">Always For You.</p>
    </header>
  );
}

export default Header;
