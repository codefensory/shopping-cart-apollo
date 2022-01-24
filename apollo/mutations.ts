import { products, cartProducts } from "./localstorage"
import { ProductType } from "../types/products";

export function addCartProduct(id: number, count: number = 1) {
  const product = getProductByID(id);
  if (product === undefined) return productNotFoundError();

  addCartProductByProduct(product, count);
}


export function deleteCartProduct(id: number) {
  const indexProduct = getIndexOfProductInCartByID(id);
  if (indexProduct === -1) return productNotFoundError();

  const newCartProducts = [...cartProducts()];
  newCartProducts.splice(indexProduct, 1);
  cartProducts(newCartProducts);
}


export function incrementCartProductCount(id: number) {
  const indexProduct = getIndexOfProductInCartByID(id);
  if (indexProduct === -1) return productNotFoundError();

  const newCartProducts = [...cartProducts()];

  const product = { ...newCartProducts[indexProduct] }
  if (!product.count) return;

  product.count++;
  newCartProducts[indexProduct] = product;

  cartProducts([...newCartProducts])
}


export function decrementCartProductCount(id: number) {
  const indexProduct = getIndexOfProductInCartByID(id);
  if (indexProduct === -1) return productNotFoundError();

  const newCartProducts = [...cartProducts()];

  const product = { ...newCartProducts[indexProduct] }
  if (!product.count) return;

  product.count--;
  newCartProducts[indexProduct] = product;

  cartProducts([...newCartProducts])
}


function getProductByID(id: number): ProductType | undefined {
  return products().find((product) => product.id === id);
}


function productNotFoundError() {
  console.error("Product not found");
}


function addCartProductByProduct(product: ProductType, count: number) {
  const newProduct: ProductType = { ...product, count: count };
  const indexOf = getIndexOfProductInCartByID(newProduct.id);

  const newCartProducts = cartProducts();

  if (indexOf === -1)
    newCartProducts.push(newProduct);
  else {
    const countIndexProduct = newCartProducts[indexOf].count;
    if (countIndexProduct && newProduct.count)
      newProduct.count += countIndexProduct;

    newCartProducts[indexOf] = newProduct;
  }

  cartProducts([...newCartProducts]);
}


function getIndexOfProductInCartByID(id: number): number {
  let index = -1;

  cartProducts().find((product, i) => {
    const isDesiredProduct = product.id === id;
    if (isDesiredProduct) index = i;
    return isDesiredProduct;
  });

  return index
}
