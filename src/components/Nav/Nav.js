import React from "react";
import Search from "../../assets/magnifying-glass-solid.svg";
import UserIcon from "../../assets/user-solid.svg";
import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";
import CartLink from "../CartLink/CartLink";
import Logo from "../ui/Logo/Logo";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const isAuthenticated = useSelector((store) => store.auth.idToken !== null);
  return (
    <div className={classes.Nav}>
      <ul className={classes.List}>
        <NavItem url="/">Home</NavItem>
        {/* <hr width="1" size="20" color="black"></hr>  */}
        <NavItem url="/">Shop</NavItem>
        <NavItem url="/products">All Products</NavItem>
        <NavItem url="/bestsellers">Best Sellers</NavItem>
        <NavItem url="/about">About Us</NavItem>
        { isAuthenticated ? <NavItem url="/signout">Sign out</NavItem> : null }
      { !isAuthenticated ? <NavItem url="/auth">Sign in</NavItem> : null }
      </ul>

      <div className={classes.Logo}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>

      <div className={classes.IconRow}>
        <NavLink to="/search">
          <img
            className={classes.icons}
            width="20px"
            src={Search}
            alt="Search"
          />
        </NavLink>
        <NavLink to="/auth">
            <img
              className={classes.icons}
              width="20px"
              src={UserIcon}
              alt="Account"
            />
          </NavLink>
        
        <NavLink className={classes.icons} to="/cart">
          <CartLink />
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
