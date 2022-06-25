import Rings from "../assets/products-2.jpg";

import weddingRings from "../assets/products-6.jpg";




import BoldEar from "../assets/Bold_Hoops.jpg";
import MiniHoops from "../assets/DailyMiniHoops.jpg";
import BlockLargeHoops from "../assets/BlockLargeHoops.jpg";
import SapphireHoops from "../assets/SapphireHoops_earrings.jpg";
import PearlHoops from "../assets/hoops_earrings_pearl.jpg";
import DMSHoops from "../assets/DomeSpheres_hoops.jpg";


import Necklakes from "../assets/TerraNecklace.jpg";
import NecklaceVarme from "../assets/Necklace-varme.jpg";
import PearlNeck from "../assets/Pearl_neck.jpg";
import opalNecklace from "../assets/opalNecklace.jpg";
import ChainNeck from "../assets/chain_Necklace.jpg";
import LotusN from "../assets/lotusNecklace.jpg";
import SQRN from "../assets/sqr-necklace.jpg";


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
    image: Necklakes,
    productId: "terra-necklace",
    categoryId: "necklaces",
    title: "Terra Necklace",
    price: 29,
  },
  {
    image: NecklaceVarme,
    productId: "varmelli-necklace",
    categoryId: "necklaces",
    title: "Varmelli Necklace",
    price: 29,
  },
  {
    image:  SQRN,
    productId: "square-necklace",
    categoryId: "necklaces",
    title: "Square Necklace",
    price: 29,
  },
  {
    image: LotusN,
    productId: "lotus-necklace",
    categoryId: "necklaces",
    title: "Lotus Aqua Necklace",
    price: 29,
  },

  {
    image: PearlNeck,
    productId: "pearl-necklace",
    categoryId: "necklaces",
    title: "Pearl Necklace",
    price: 29,
  },
  {
    image: opalNecklace,
    productId: "opal-necklace",
    categoryId: "necklaces",
    title: "Opal Necklace",
    price: 29,
  },
  {
    image: ChainNeck,
    productId: "chain-necklace",
    categoryId: "necklaces",
    title: "chain Necklace",
    price: 29,
  },










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