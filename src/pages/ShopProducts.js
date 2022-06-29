import React from "react";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import image from "../assets/header-img-collections.webp";
import { getProducts } from "../data/dataProducts";
import ShopBy from "../components/ShopBy/ShopBy";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/dataCategories";
import All from "../components/AllProducts/AllProducts";

function Products() {
  return (
    <>
      <Header image={image}></Header>
      <All/>
       <ProductList products={getProducts()} />
      <ShopBy />
      <CategoryList categories={getCategories()} />
     
    </>
  );
}

export default Products;
