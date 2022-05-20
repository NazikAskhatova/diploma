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
    categoryId: "coupleBracellets",
    title: "Gold Rings",
    price: 79,
  },
  {
    image: Earrings,
    productId: "earrings",
    categoryId: "designRings",
    title: "Earrings",
    price: 89,
  },
  {
    image: Bracellets,
    productId: "bracellets",
    categoryId: "bracellets",
    title: "Bracellets",
    price: 119,
  },
  {
    image: weddingRings,
    productId: "wedding-rings",
    categoryId: "wedding",
    title: "Wedding Rings",
    price: 69,
  },
  {
    image: Necklakes,
    productId: "necklakes",
    categoryId: "all rings",
    title: "Necklakes is here",
    price: 99,
  },
  {
    image: Rings,
    productId: "watches",
    categoryId: "duorings",
    title: "Watches is here",
    price: 109,
  },
];

export function getProducts(category) {
  if (category) {
    return products.filter(product => product.categoryId === category);
  }
  return products;
}

export function getProduct(productId) {
  return products [
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}
