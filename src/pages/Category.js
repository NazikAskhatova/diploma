
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getCategories } from "../data/dataCategories";

function Category() {
  const params = useParams();
  const category = getCategories(params.categoryId);

  if (!category) {
    return null;
  }

  return (
<>
<Header 
title={category.title}
image={category.image}>
</Header>
</>
  );
}

export default Category;