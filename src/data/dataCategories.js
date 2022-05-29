import designJew from "../assets/products-5.jpg";
import designRings from "../assets/categories-2.jpg";
import Bracelets from "../assets/categories-3.jpg";
import weddingJewerly from "../assets/products-4.jpg";
import Necklakes from "../assets/categories-8.jpg";
import Gifts from "../assets/products-3.jpg";

const categories = [
  {
    image: designRings,
    categoryId: "designRings",
    title: "Rings",
    description: "Our specially rings for your loved ones"
  }, 
  {
    image: Necklakes ,
    categoryId: "necklaces",
    title: "Necklakes",
    description: "Find the best rings for your Valentine"
  },
  {
    image: Bracelets,
    categoryId: "bracelets",
    title: "Bracellets",
    description: "Find the best gift for your Valentine!"
  },
  {
    image: weddingJewerly,
    categoryId: "wedding",
    title: "Wedding Jewerly",
    description: "Our all best art for your best day"
  },
   {
    image: designJew,
    categoryId: "designJew",
    title: "Special design for your art",
    price: 119,
    description: "You can find all our special bracellets here"
  },
  {
    image: Gifts ,
    categoryId: "all rings",
    title: "Our gifts",
    price: 99,
    description: "There you can find our all special rings"
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
