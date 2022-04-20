import ProductItem from "./ProductItem/ProductItem";

function ProductList({ products }) {
    const product = {};
    return (
        <div className="ProductList">
            <ProductItem product={product} />
        </div>
    );

}

export default ProductList;