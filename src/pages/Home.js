import "./style.css";
import React from "react";
import Header from "../components/Header/Header";
import image from "../assets/headerimg.webp";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/dataCategories";

function Home() {
  return (
    <>
      <Header title="Jewelry is our art." image={image}>
        {" "}
        Always for you.{" "}
      </Header>
      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Home;
