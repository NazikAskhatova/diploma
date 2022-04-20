import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import productImage from "../../../assets/products-6.jpg";

function ProductItem({ product }) {
    return (
        <div className={classes.ProuctItem}>
<img src={productImage}/>
<div>
    <Link to="/">Rings</Link>
 <div className={classes.price}>$79.9</div>
</div>
        </div>
    )
}

export default ProductItem;