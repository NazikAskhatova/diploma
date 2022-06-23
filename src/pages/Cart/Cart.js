
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../data/dataProducts";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";

function Cart() {
  const items = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
  // let outputAmount = 0
    .filter(product => items[product.productId])
    .map(product => {
      total += product.price * items[product.productId];

      return (
        <>
        <div >
          <Link to="">{product.title}</Link> {items[product.productId]} ${product.price * items[product.productId]}
        <div className={classes.QuantitySelector}>
   <button className={classes.Current} onClick={() => dispatch({ type: "cart/decrement", payload: product.productId })}>-</button>
         <input className={classes.Current}/>
          <button className={classes.Current} onClick={() => dispatch({ type: "cart/increment", payload: product.productId })}>+</button>
         </div>
         
          <button className={classes.anButton} onClick={() => dispatch({ type: "cart/delete", payload: product.productId })}><span>Delete</span><span>Delete</span></button>
          
          
          
   
{/*        
        <button className={classes.anButton}></button> */}
         </div> 
        </>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }


  return (
    <div className={classes.Cart}>
      <div>
        Please review items in your cart.
      </div>
      <div>
       {output}
       {/* {outputAmount} */}
        Total: ${total}
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;