import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getCategory } from "../data/dataCategories";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/dataProducts";
// import ProductList from "../components/ProductList/ProductList";

function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }

  return (
    <>
      <Header title={category.title} image={category.image}>
        {category.description}
      </Header>

      <ProductList products={getProducts(category.categoryId)} />
    </>
  );
}

export default Category;
