
import React from "react";
import Search from "../../assets/magnifying-glass-solid.svg";
import UserIcon from "../../assets/user-solid.svg";
import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";
import CartLink from "../CartLink/CartLink";
import Logo from "../ui/Logo/Logo";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className={classes.Nav}>
      
      <ul className={classes.Nav}>
         <NavItem url="/">Home</NavItem>
      <NavItem url="/products">Our Products</NavItem>
       <NavItem url="/about">About</NavItem>
      </ul>
      <NavLink to="/"><Logo /></NavLink>
      <ul className={classes.Nav}>
        <NavLink to="/search" className={classes.icons}><img src={Search} className={classes.searchIcon} alt="Search" /></NavLink>
        <NavLink to="/auth" className={classes.icons}><img src={UserIcon} className={classes.accountIcon} alt="Account" /></NavLink>
        <NavLink to="/cart" className={classes.icons}><CartLink /></NavLink>
        </ul>
    </div>
  );
}

// function Nav() {
//   return (
//       <ul className={classes.Nav}>
//         <NavItem url="/">Home</NavItem>
//         <NavItem url="/products">Our Products</NavItem>
//         <NavItem url="/about">About</NavItem>
//       </ul>
//     <NavLink to="/" className={classes.logo}><Logo /></NavLink>
//   );
// }

export default Nav;



