import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem";
import React from "react";
import NavToggle from "./NavToggle/NavToggle";

function Nav() {
  return (
    <nav className="Nav">
      <div className="container">
        <Logo />
      <ul>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products">Products</NavItem>
        <NavItem url="/contacts">Contacts</NavItem>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/shop">Shop</NavItem>
      </ul>
      <NavToggle />
      </div>
    </nav>
  )};

export default Nav;