import { makeVar } from "@apollo/client";
import { ProductType } from "../types/products";

const productsInitValues: ProductType[] = [{
  id: 0,
  name: "Yogurt Laive",
  image: "none",
  price: 20
}]

export const products = makeVar<ProductType[]>(productsInitValues);
export const cartProducts = makeVar<ProductType[]>([]);
