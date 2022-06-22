import { useParams } from "react-router-dom";
import CartButton from "../components/CartButton/CartButton";
import Header from "../components/Header/Header";
import { getProduct } from "../data/dataProducts";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <Header title={product.title} image={product.image}>
        price={product.price}
      </Header>
      <CartButton productId={params.productId} />
    </>
  );
}

export default Product;
