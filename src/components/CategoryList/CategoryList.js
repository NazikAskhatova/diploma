import CategoryItem from "./CategoryItem/CategoryItem";
import classes from "./CategoryList.module.css";
import React from "react";
function CategoryList({ categories }) {
    const categoryItems = categories.map(category => (
        <CategoryItem key={category.categoryId} category={category} />
    ));

    return (
        <div className={classes.CategoryList}>
       {categoryItems}
        </div>
    );
}

export default CategoryList;