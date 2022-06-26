import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ShoppingCart from "../../assets/cart-shopping-solid.svg";
import classes from "./CartLink.module.css"

export default function CartLink() {
  const number = useSelector((store) => {
    return Object.values(store.cart.items).reduce(
      (sum, number) => sum + number,
      0
    );
  });

  return (
    <NavLink to="/cart">
      <img src={ShoppingCart} className={classes.shoppingcartIcon} alt="Account" />
      <span className={classes.shoppingcartIcon}>{number}</span> 
    </NavLink>
  );
}
