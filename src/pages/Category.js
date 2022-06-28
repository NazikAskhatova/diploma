import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getCategory } from "../data/dataCategories";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/dataProducts";

function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }

  return (
    <>
      <Header image={category.imageHeader}>

      </Header>

      <ProductList products={getProducts(category.categoryId)} />
    </>
  );
}

export default Category;
