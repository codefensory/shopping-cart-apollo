import { makeVar } from "@apollo/client";
import { ProductType } from "../types/products";

const productsInitValues: ProductType[] = [{
  id: 0,
  name: "Yogurt Laive",
  image: "none",
  price: 23,
}, {
  id: 1,
  name: "Frugos de Manzana 2l",
  image: "none",
  price: 25.20,
}, {
  id: 2,
  name: "Cocacola 3l",
  image: "none",
  price: 26.90,
}, {
  id: 3,
  name: "Cocacola 2l",
  image: "none",
  price: 20.80,
}, {
  id: 4,
  name: "Incakola 2l",
  image: "none",
  price: 22.50,
}, {
  id: 5,
  name: "Keke de naranja",
  image: "none",
  price: 8.90,
}, {
  id: 6,
  name: "Doritos Ruleta",
  image: "none",
  price: 9.20,
}, {
  id: 7,
  name: "Oreo",
  image: "none",
  price: 5,
}, {
  id: 8,
  name: "Frugos de Pera 1l",
  image: "none",
  price: 14.50,
}, {
  id: 9,
  name: "Cocosette",
  image: "none",
  price: 23,
}]

export const products = makeVar<ProductType[]>(productsInitValues);
export const cartProducts = makeVar<ProductType[]>([]);
