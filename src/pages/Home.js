import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/header-jw.jpg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/dataCategories";
import ShopBy from "../components/ShopBy/ShopBy";
import HomeEl from "../components/HomeElement/HomeElement";
import Location from "../components/Location/Location";
import SectionLine from "../components/SectionLine/SectionLine";
// import ProductList from "../components/ProductList/ProductList";
// import { getProducts } from "../data/dataProducts";
// import All from "../components/AllProducts/AllProducts";

function Home() {
  return (
    <>
      <Header title="Jewelry is our art." image={image}>
        {" "}
        Always for you.{" "}
      </Header>
      <ShopBy />
      <CategoryList categories={getCategories()} />
      <SectionLine/>
<HomeEl/>
<Location/>
      {/* <All />
      <ProductList products={getProducts()} /> */}
    </>
  );
}

export default Home;
