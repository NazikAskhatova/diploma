import Rings from "../assets/products-2.jpg";
import Earrings from "../assets/products-3.jpg";
import weddingRings from "../assets/products-6.jpg";

import Necklakes from "../assets/products-7.jpg";
import NecklaceSil from "../assets/necklace-product-1.jpg";
import NecklaceRose from "../assets/necklace-product-3.webp";
import NecklaceChoker from "../assets/necklace-product-4.jpg";
import NecklaceGolden from "../assets/necklace-product-5.webp";
import necklakeGoldn from "../assets/necklace-product-8.jpg";
import necklaceroseg from "../assets/necklace-product-9.jpg";

import Bracelets from "../assets/bracelet-product-1.webp";
import BraceletsRose from "../assets/bracelet-product-3.jpg";
import BraceletsWhite from "../assets/bracelet-collection.jpg";
import BraceletsSilver from "../assets/bracelet-product-5.jpg";
import BraceletSilv from "../assets/bracelet-product-7.webp";
import BraceletSilver from "../assets/bracelet-product-8.webp";


const products = [
  {
    image: BraceletsRose,
    productId: "rings",
    categoryId: "bracelets",
    title: "Pink Gold Heart Bracelet",
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
    image: Bracelets,
    productId: "bracelets",
    categoryId: "bracelets",
    title: "Pink Gold Rosie Bracelet",
    price: 29,
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
    productId: "necklaces",
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
  {
    image: BraceletsWhite,
    productId: "watches",
    categoryId: "bracelets",
    title: "Snow White Silver Blacelet",
    price: 19,
  }, 
  {
    image: BraceletsSilver,
    productId: "watches",
    categoryId: "bracelets",
    title: "Silver Classic Blacelet",
    price: 19,
  }, 
  {
    image: BraceletSilv,
    productId: "watches",
    categoryId: "bracelets",
    title: "Silver Classic White Blacelet",
    price: 19,
  }, 
  {
    image: BraceletSilver,
    productId: "watches",
    categoryId: "bracelets",
    title: "Silver Blacelet With White Diamonds",
    price: 19,
  }, 
  {
    image: NecklaceSil,
    productId: "watches",
    categoryId: "necklaces",
    title: "Silver Blacelet With White Diamonds",
    price: 19,
  }, 
  {
    image: NecklaceRose,
    productId: "watches",
    categoryId: "necklaces",
    title: "Silver Blacelet With White Diamonds",
    price: 19,
  }, 
  {
    image: NecklaceGolden,
    productId: "watches",
    categoryId: "necklaces",
    title: "Silver Blacelet With White Diamonds",
    price: 19,
  }, 
  {
    image: necklaceroseg,
    productId: "watches",
    categoryId: "necklaces",
    title: "Silver Blacelet With White Diamonds",
    price: 19,
  }, 
  
  {
    image: necklakeGoldn,
    productId: "watches",
    categoryId: "necklaces",
    title: "golden necklace with designed diamonds",
    price: 19,
  }, 
  {
    image: NecklaceChoker,
    productId: "watches",
    categoryId: "necklaces",
    title: "silver classic choker with diamonds",
    price: 19,
  }, 
  
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);
  }
  return products;
};

export function getProduct(productId) {
  return products[
    products.findIndex(
      product => product.productId === productId)
  ];
};


