
import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <div className={classes.ProductItem}>
      <img src={product.image} alt="/" />
      <Link className={classes.ProductItemText} to={"/product/" + product.productId}>{product.title}</Link>
      <div className={classes.price}>{product.price}</div>
    </div>
  );
}

export default ProductItem;