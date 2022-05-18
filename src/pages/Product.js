
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getProducts } from "../data/dataProducts";

function Product() {
  const params = useParams();
  const product = getProducts(params.productId);

  if (!product) {
    return null;
  }

  return (
<>
<Header 
title={product.title}
image={product.image}>
{product.description}
</Header>
</>
  );
}

export default Product;