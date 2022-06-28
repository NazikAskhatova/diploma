import Rings from "../assets/diamond-rings.jpg";
import Bracelets from "../assets/bracelet-cat.jpg";
import Necklaces from "../assets/TerraNecklace-v.jpg";
import Earrings from "../assets/earrings-category-vers.jpg";
import Wedding from "../assets/wedding-cat.jpg";
import SingleEarr from "../assets/single-earrings.jpg";

import RingsH from "../assets/rings-headerimg.webp";
import BraceletsH from "../assets/bracelets-nav.webp";
import NecklacesH from "../assets/necklaces-categ.webp";
import EarringsH from "../assets/earrings-category.webp";
import WeddingH from "../assets/wedding.webp";
import SingleEarrH from "../assets/single-earrings-cat.webp";


const categories = [
  {
    image: Earrings,
    imageHeader: EarringsH,
    categoryId: "earrings",
    title: "Earrings",
    price: 99,
    description: "",
  },
  {
    image: Rings,
    imageHeader: RingsH,
    categoryId: "rings",
    title: "Rings",
    price: 119,
    description: "",
  },
  {
    image: Bracelets,
    imageHeader: BraceletsH,
    categoryId: "bracelets",
    title: "Bracellets",
    description: "",
  },
  {
    image: Necklaces,
    imageHeader: NecklacesH,
    categoryId: "necklaces",
    title: "Necklaces",
    description: "",
  },
  {
    image: Wedding,
    imageHeader: WeddingH ,
    categoryId: "wedding",
    title: "Wedding",
    description: "",
  },
  {
    image: SingleEarr,
    imageHeader: SingleEarrH,
    categoryId: "single-earrings",
    title: "Single earrings",
    description: "",
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

