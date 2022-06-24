import { useDispatch } from "react-redux";
import React from "react";
import classes from  "./CartButton.module.css";
import { add } from "../../redux/cartSlice";

export default function CartButton({ productId }) {
  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch(add(productId));
  }

  return (
    <button className={classes.CartButton} onClick={onAddToCart}>Add to card</button>
  );
}