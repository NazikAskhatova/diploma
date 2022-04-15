import React from "react";
import "./Header.css";
import headerImage from "../../assets/header-jw.jpg";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`,
    backgroundPosition: "center",

  };

  return (
    <header className="Header" style={style}>
      <h1 className="first-art">Our Jewellery Is Art.</h1>
      <p className="second-art">Always For You.</p>
    </header>
  );
}

export default Header;
