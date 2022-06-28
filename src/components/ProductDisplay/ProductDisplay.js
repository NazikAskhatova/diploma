
import React from "react";
import { useParams } from "react-router-dom";
import CartButton from "../../components/CartButton/CartButton";
import { getProduct } from "../../data/dataProducts";
import classes from "./ProductDisplay.module.css"

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <div className={classes.Product}>
        <img src={product.image} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <CartButton className={classes.CartButton} productId={params.productId} />
        </div>
      </div>
    </>
  );
}

export default Product;