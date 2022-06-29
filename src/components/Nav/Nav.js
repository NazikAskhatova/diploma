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
      </ul>
      <div className={classes.Logo}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>

      <ul>
        <li className={classes.icons}>
          <NavLink to="/search">
            <img src={Search} alt="Search" />
          </NavLink>
        </li>
        {!isAuthenticated ? (
          <li className={classes.icons}>
            <NavLink to="/auth">
              <img  src={UserIcon}  alt="Account" />
            </NavLink>
          </li>
        ) : null}
        {/* {isAuthenticated ? (
          <li className={classes.icons}>
            <NavLink to="/signout">
              <img src={Signout} className={classes.userIcon} alt="Account" />
            </NavLink>
          </li>
        ) : null} */}
        <li className={classes.icons}>
          <NavLink  to="/cart">
            <CartLink />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
