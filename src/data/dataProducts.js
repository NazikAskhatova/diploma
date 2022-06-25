import Rings from "../assets/products-2.jpg";

import weddingRings from "../assets/products-6.jpg";




import BoldEar from "../assets/Bold_Hoops.jpg";
import MiniHoops from "../assets/DailyMiniHoops.jpg";
import BlockLargeHoops from "../assets/BlockLargeHoops.jpg";
import SapphireHoops from "../assets/SapphireHoops_earrings.jpg";
import PearlHoops from "../assets/hoops_earrings_pearl.jpg";
import DMSHoops from "../assets/DomeSpheres_hoops.jpg";


import Necklakes from "../assets/products-7.jpg";
import NecklaceSil from "../assets/necklace-product-1.jpg";
import NecklaceRose from "../assets/necklace-product-3.webp";
import NecklaceChoker from "../assets/necklace-product-4.jpg";
import NecklaceGolden from "../assets/necklace-product-5.webp";
import necklakeGoldn from "../assets/necklace-product-8.jpg";
import necklaceroseg from "../assets/necklace-product-9.jpg";


import BraceletSilv from "../assets/bracelet-product-7.webp";
import BraceletSilver from "../assets/bracelet-product-8.webp";



const products = [
  {
    image: SapphireHoops,
    productId: "sapphire-hoops-golden",
    categoryId: "earrings",
    title: "sapphire hoops",
    price: 79,
  },
  {
    image: DMSHoops,
    productId: "dome-sapphire-hoops",
    categoryId: "earrings",
    title: "Dome Sapphere Hoops",
    price: 79,
  },
  {
    image: BoldEar,
    productId: "bold-hoops-earrings",
    categoryId: "earrings",
    title: "Bold Hoops Golden Metall",
    price: 79,
  },
  {
    image: MiniHoops,
    productId: "daily-mini-hoops",
    categoryId: "earrings",
    title: "Daily Mini Golden Hoops",
    price: 79,
  },
  {
    image: BlockLargeHoops,
    productId: "block-large-hoops",
    categoryId: "earrings",
    title: "Block Large Hoops",
    price: 89,
  },
  {
    image: PearlHoops,
    productId: "pearl-hoops",
    categoryId: "earrings",
    title: "pearl hoops",
    price: 29,
  },
  // {
  //   image: Bracelets,
  //   productId: "bracelet-pink",
  //   categoryId: "earrings",
  //   title: "Pink Gold Rosie Bracelet",
  //   price: 29,
  // },
  {
    image: weddingRings,
    productId: "wedding-rings",
    categoryId: "rings",
    title: "Rings",
    price: 69,
  },
  {
    image: Necklakes,
    productId: "necklace-gold",
    categoryId: "all rings",
    title: "Necklakes",
    price: 99,
  },
  {
    image: Rings,
    productId: "rings-silver",
    categoryId: "rings",
    title: "Watches",
    price: 109,
  },
  // {
  //   image: BraceletsWhite,
  //   productId: "white-bracelet",
  //   categoryId: "bracelets",
  //   title: "Snow White Silver Blacelet",
  //   price: 19,
  // },
  // {
  //   image: BraceletsSilver,
  //   productId: "bracelet-silver",
  //   categoryId: "bracelets",
  //   title: "Silver Classic Blacelet",
  //   price: 19,
  // },
  {
    image: BraceletSilv,
    productId: "classic-bracelet",
    categoryId: "bracelets",
    title: "Silver Classic White Blacelet",
    price: 19,
  },
  {
    image: BraceletSilver,
    productId: "diamond-bracelet",
    categoryId: "bracelets",
    title: "Silver Blacelet With White Diamonds",
    price: 19,
  },
  {
    image: NecklaceSil,
    productId: "white-silver-bracelet",
    categoryId: "necklaces",
    title: "Silver Blacelet With White Diamonds",
    price: 19,
  },
  {
    image: NecklaceRose,
    productId: "diamonds-silver-bracelet",
    categoryId: "necklaces",
    title: "Silver Blacelet With White Diamonds",
    price: 19,
  },
  {
    image: NecklaceGolden,
    productId: "diamonds-bracelet-white",
    categoryId: "necklaces",
    title: "Silver Blacelet With White Diamonds",
    price: 19,
  },
  {
    image: necklaceroseg,
    productId: "silver-diamonds-bracelet",
    categoryId: "necklaces",
    title: "Silver Blacelet With White Diamonds",
    price: 19,
  },

  {
    image: necklakeGoldn,
    productId: "golden-necklace",
    categoryId: "necklaces",
    title: "golden necklace with designed diamonds",
    price: 19,
  },
  {
    image: NecklaceChoker,
    productId: "silver-necklace",
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
}

export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}