import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../data/dataProducts";
import { Link } from "react-router-dom";
import React from "react";
import classes from "./CartDisplay.module.css";
import { increment, decrement, remove } from "../../redux/cartSlice";

function CartDisplay() {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <div className={classes.item}>
          <Link
            to={"/cart/" + product.productId}
            className={classes.productCard}
          >
            <button
            className={classes.deleteButton}
            onClick={() => dispatch(remove(product.productId))}
          >
            Delete
          </button>
            <img
              src={product.image}
              alt={product.title}
              className={classes.productImage}
              width="150px"
            />
            {product.title}
          </Link>
          <div>
            <button
              className={classes.changeButton}
              onClick={() => dispatch(decrement(product.productId))}
            >
              -
            </button>
            <span className={classes.productQuantity}>
              {items[product.productId]}
            </span>
            <button
              className={classes.changeButton}
              onClick={() => dispatch(increment(product.productId))}
            >
              +
            </button>
          </div>
          <span className={classes.productPrice}>
            ${product.price * items[product.productId]}
          </span>
         
        </div>
      );
    });

  let checkoutPath = "/checkout";

  if (!output.length) {
    output = (
      <>
        <div>No items in the cart.</div>
        <Link to="/products">
          <button className={classes.checkoutButton}>Continue shopping</button>
        </Link>
      </>
    );
    checkoutPath = "/products";
  }

  return (
   
          <div className={classes.Cart}>
      <div className={classes.container}>
        <div className={classes.cartHeader}>
          <h1>Your Shopping Cart</h1>
          <p>Please review items in your cart.</p>
          {output}
        </div>
        <hr className={classes.hrStyle}></hr>
        <div className={classes.totalPrice}>
          <h2>Order summary</h2>
          Total: ${total}
          <Link to={checkoutPath}>
            <button className={classes.checkoutButton}>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  
   
);
}

export default CartDisplay;
