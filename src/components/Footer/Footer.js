import React from "react";
import NavItem from "../Nav/NavItem/NavItem";
import Logo from "../ui/Logo/Logo";
import "./Footer.css";

function Footer() {
  return (

<div>
    
<footer className="Footer">      <hr></hr>
      <div className="flex-container">
       <Logo/>
       <div>
         <ul>
         <NavItem url="/">Home</NavItem>
      <NavItem url="/products">all Products</NavItem>
      <NavItem url="/bestsellers">Best Sellers</NavItem>
       <NavItem url="/about">About us</NavItem>
         </ul>
         <ul>
         <NavItem url="/">Contact us</NavItem>
    
       </ul>
      
       </div>
       </div>
    </footer>

    </div>
    

  );
}


export default Footer;
