import designJew from "../assets/products-5.jpg";
import Bracelets from "../assets/categories-3.jpg";
import weddingJewerly from "../assets/products-4.jpg";
import Necklakes from "../assets/products-4.jpg";
import Gifts from "../assets/products-3.jpg";

const categories = [
  {
    image: Gifts,
    categoryId: "earrings",
    title: "Earrings",
    price: 99,
    description: "There you can find our all special rings",
  },
  {
    image: designJew,
    categoryId: "rings",
    title: "Rings",
    price: 119,
    description: "You can find all our special bracellets here",
  },
  {
    image: Bracelets,
    categoryId: "bracelets",
    title: "Bracellets",
    description: "Find the best gift for your Valentine!",
  },
  {
    image: Necklakes,
    categoryId: "necklaces",
    title: "Necklakes",
    description: "Find the best rings for your Valentine",
  },
  {
    image: weddingJewerly,
    categoryId: "watches",
    title: "Watches",
    description: "Our all best art for your best day",
  },
  
];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex((category) => category.categoryId === categoryId)
  ];
}
