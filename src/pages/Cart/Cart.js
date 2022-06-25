// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../data/dataProducts";
// import { Link } from "react-router-dom";
// import classes from "./Cart.module.css";
// import { increment, decrement, remove } from "../../redux/cartSlice";
// function Cart() {
//   const items = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();
//   const products = getProducts();

//   let total = 0;
//   let output = products
//     // let outputAmount = 0
//     .filter((product) => items[product.productId])
//     .map((product) => {
//       total += product.price * items[product.productId];

//       return (
//         <>
//           <div className={classes.Cart}>
//             <Link to="">{product.title}</Link> {items[product.productId]} $
//             {product.price * items[product.productId]}
//             <div className={classes.QuantitySelector}>
//               <button
//                 className={classes.Current}
//                 onClick={() => dispatch(decrement(product.productId))}
//               >
//                 -
//               </button>
//               <input className={classes.Current} />
//               <button
//                 className={classes.Current}
//                 onClick={() => dispatch(increment(product.productId))}
//               >
//                 +
//               </button>
//             </div>
//             <button
//               className={classes.CartButton}
//               onClick={() => dispatch(remove(product.productId))}
//             >
//               Delete
//             </button>
//             {/*        
//         <button className={classes.anButton}></button> */}
//           </div>
//         </>
//       );
//     });

//   if (!output) {
//     output = "No items in the cart.";
//   }

//   return (
//     <div className={classes.Cart}>
//       <div>Products in your cart</div>
//       <div>
//         {output}
//         {/* {outputAmount} */}
//         Total: ${total}
//         <Link className={classes.CartButton} to="/checkout">
//           Checkout
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Cart;

import Header from "../../components/Header/Header";
import image from "../../assets/rings-product.webp"
import CartDisplay from "../../components/CartDisplay/CartDispaly";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Header
        image={image}>
      </Header>

      <CartDisplay actions />

      <Link to="/checkout">Checkout</Link>
    </>
  );
}
export default Cart;
