import bracelletsCategory from "../assets/categories-1.jpg";
import designRings from "../assets/categories-2.jpg";
import coupleBracellets from "../assets/categories-3.jpg";
import weddingJewerly from "../assets/categories-4.jpg";
import coupleRings from "../assets/categories-6.jpg";
import Rings from "../assets/categories-5.jpg";

const categories = [
  {
    image: designRings,
    categoryId: "designRings",
    title: "Design Rings",
    price: 79,
    description: "Our specially rings for your loved ones"
  },
  {
    image: coupleBracellets,
    categoryId: "coupleBracellets",
    title: "Couple Bracellets",
    price: 89,
    description: "Find the best gift for your Valentine!"
  },
  {
    image: bracelletsCategory,
    categoryId: "bracellets",
    title: "All Bracellets",
    price: 119,
    description: "You can find all our special bracellets here"
  },
  {
    image: weddingJewerly,
    categoryId: "wedding",
    title: "Wedding Jewerly",
    price: 69,
    description: "Our all best art for your best day"
  },
  {
    image: Rings,
    categoryId: "all rings",
    title: "All rings",
    price: 99,
    description: "There you can find our all special rings"
  },
  {
    image: coupleRings ,
    categoryId: "duorings",
    title: "Couple Rings",
    price: 109,
    description: "Find the best rings for your Valentine"
  },
];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId){
  return categories [
    categories.findIndex(
      category =>  category.categoryId === categoryId
    )
  ];
}
