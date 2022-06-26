import Rings from "../assets/diamond-rings.jpg";
import Bracelets from "../assets/bracelet-cat.jpg";
import Necklaces from "../assets/TerraNecklace-v.jpg";
import Earrings from "../assets/earrings-category-vers.jpg";
import Wedding from "../assets/wedding-cat.jpg";


const categories = [
  {
    image: Earrings,
    categoryId: "earrings",
    title: "Earrings",
    price: 99,
    description: "There you can find our all special rings",
  },
  {
    image: Rings,
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
    image: Necklaces,
    categoryId: "necklaces",
    title: "Necklaces",
    description: "Find the best rings for your Valentine",
  },
  {
    image: Wedding,
    categoryId: "wedding",
    title: "Wedding",
    description: "Find the best rings for your Valentine",
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
