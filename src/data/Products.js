import "../pages/style.css";
import React from "react";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import image from "../assets/jew-shop.jpeg";

import Rings from "../assets/products-2.jpg";
import Earrings from "../assets/products-3.jpg";
import Bracellets from "../assets/products-5.jpg";
import weddingRings from "../assets/products-6.jpg";
import Necklakes from "../assets/products-7.jpg";
import Watches from "../assets/products-card.jpg";

function Products() {
  const products = {
   Rings: {
      image: Rings,
      path: "/",
      title: "Rings category is here",
      price: 79.9,
    },
   Earrings: {
      image: Earrings,
      path: "/",
      title: "Earrings category is here",
      price: 89.9,
    },
   Bracellets: {
      image: Bracellets,
      path: "/",
      title: "Bracellets is here",
      price: 119.8,
    },
   weddingRings: {
      image: weddingRings,
      path: "/",
      title: "Wedding Rings is here",
      price: 69.9,
    },
 Necklakes: {
      image: Necklakes,
      path: "/",
      title: "Necklakes is here",
      price: 99.9,
    },
    Watches: {
      image: Watches,
      path: "/",
      title: "Watches is here",
      price: 109.9,
    },
  };

  return (
    <>
      <Header
        title="Shop with us. Be confident with us"
        image={image}>
       
      </Header>

      <ProductList products={products} />
    </>
  );
} 
 export default Products;