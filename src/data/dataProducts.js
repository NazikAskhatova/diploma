import Rings from "../assets/products-2.jpg";
import Earrings from "../assets/products-3.jpg";
import Bracellets from "../assets/products-5.jpg";
import weddingRings from "../assets/products-6.jpg";
import Necklakes from "../assets/products-7.jpg";
import Watches from "../assets/products-card.jpg";

const products = [
  {
    image: Watches,
    productId: "rings",
    title: "Rings category is here",
    price: 79,
  },
  {
    image: Earrings,
    productId: "earrings",
    title: "Earrings category is here",
    price: 89,
  },
  {
    image: Bracellets,
    productId: "bracellets",
    title: "Bracellets is here",
    price: 119,
  },
  {
    image: weddingRings,
    productId: "wedding-rings",
    title: "Wedding Rings is here",
    price: 69,
  },
  {
    image: Necklakes,
    productId: "necklakes",
    title: "Necklakes is here",
    price: 99,
  },
  {
    image: Rings,
    productId: "watches",
    title: "Watches is here",
    price: 109,
  },
];

export function getProducts() {
  return products;
}
