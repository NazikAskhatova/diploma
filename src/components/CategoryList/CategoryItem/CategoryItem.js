
import React from "react";
import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.css";

function CategoryItem({ category }) {
  return (
    <div className={classes.CategoryItem}>
      <img src={category.image} alt="/" />
      <Link className={classes.CategoryItemText} to={"/categories/" + category.categoryId}>{category.title}</Link>
    </div>
  );
}

export default CategoryItem;