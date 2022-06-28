import React from "react";
import "./Header.css";
function Header({ image, title, children }) {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    
  };

  return (
    <header className="Header">
      <section style={style} className="section-cont">
        <h1 className="first-art">{title}</h1>
        <p className="second-art">{children}</p>
      </section>
    </header>
  );
}

export default Header;

