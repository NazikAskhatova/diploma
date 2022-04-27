import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductList.module.css";

function ProductList({ products }) {
    const product = {};
    return (
        <div className={classes.ProductList}>
            <ProductItem product={product} />
        </div>
    );

}

export default ProductList;