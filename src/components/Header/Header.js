import React from "react";
import "./Header.css";
import headerImage from "../../assets/jewellery-header";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`
  };

  return (
    <header className="Header" style={style}>
      <h1>Our Jewellery Is Art.</h1>
      <p>Always For You.</p>
    </header>
  );
}

export default Header;
