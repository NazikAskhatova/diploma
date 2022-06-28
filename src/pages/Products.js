
import React from "react";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import image from "../assets/header-img-collections.webp";
import { getProducts } from "../data/dataProducts";

function Products() {
  return (
    <>
      <Header image={image}></Header>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;
