import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/headerimg.webp";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/dataCategories";
import ShopBy from "../components/ShopBy/ShopBy";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/dataProducts";
import All from "../components/AllProducts/AllProducts";

function Home() {
  return (
    <>
      <Header title="Jewelry is our art." image={image}>
        {" "}
        Always for you.{" "}
      </Header>
      <ShopBy />
      <CategoryList categories={getCategories()} />
      <All />
      <ProductList products={getProducts()} />
    </>
  );
}

export default Home;
