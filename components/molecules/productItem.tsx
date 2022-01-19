import { ProductType } from "../../types/products";

type ProductItemProps = {
  data: ProductType,
  isCart?: boolean,
}

const ProductItem = ({ data }: ProductItemProps) => {
  return (
    <div>
      <div>name: {data.name}</div>
      <div>price: {data.price}</div>
    </div>
  )
}

export default ProductItem
