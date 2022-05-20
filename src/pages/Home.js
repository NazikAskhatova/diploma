import "./style.css";
import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/header-jw.jpg" 
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/dataCategories";


function Home() {
  return (
    // <article className="text-center">
    //   <h1>Be confident with us. </h1>
    //   <p>You can wear whatever you want.</p>
    // </article>
    <>
      <Header title="Jewelry is our art." image={image}> Always for you. </Header>
      <CategoryList categories={getCategories()}/>
    </>
  );
}

export default Home;
