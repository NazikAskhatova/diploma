
import Header from "../../components/Header/Header";
import image from "../../assets/header-shop-image.webp"
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
