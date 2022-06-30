import React from "react";
import { useParams } from "react-router-dom";
import CartButton from "../../components/CartButton/CartButton";
import { getProduct } from "../../data/dataProducts";
import classes from "./ProductDisplay.module.css";

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
          <h3>{product.title} </h3> 
       <span className={classes.Price}> $ {product.price}</span>
          <CartButton
            className={classes.CartButton}
            productId={params.productId}
          />
        </div>
      </div>
    </>
  );
}

export default Product;
