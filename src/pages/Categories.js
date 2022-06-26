import "../pages/style.css";
import React from "react";
import Header from "../components/Header/Header";
import CategoryList from "../components/CategoryList/CategoryList";
import image from "../assets/header-img-collections.webp";
import { getCategories } from "../data/dataCategories";

function Categories() {
  return (
    <>
      <Header title="Shop with us. Be confident with us" image={image}></Header>

      <CategoryList categories={getCategories()}/>
    </>
  );
}

export default Categories;
