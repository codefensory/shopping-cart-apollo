export type ProductType = {
  id: number,
  name: string,
  image: string,
  price: number,
  count?: number,
}

export type ListProducts = {
  data: ProductType[],
  isLoading: boolean,
}
