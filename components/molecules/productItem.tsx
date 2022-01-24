import { ProductType } from "../../types/products";
import Show from "../helpers/Show";

type ProductItemProps = {
  data: ProductType,
  isCart?: boolean,
  onAddProduct?: (id: number) => void,
  onDeleteProduct?: (id: number) => void,
  onIncrementCounter?: (id: number) => void,
  onDecrementCounter?: (id: number) => void,
}

const ProductItem = (props: ProductItemProps) => {
  const data = props.data

  const handlerClickSendId = (fn?: (id: number) => void) => {
    if (!fn) return;
    fn(data.id);
  }

  return (
    <div>
      <div>name: {data.name}</div>
      <div>price: {data.price}</div>

      <Show when={props.isCart}>
        <button
          disabled={data.count ? data.count <= 1 : false}
          onClick={() => handlerClickSendId(props.onDecrementCounter)}
        >
          -
        </button>
        <span>count: {data.count}</span>
        <button onClick={() => handlerClickSendId(props.onIncrementCounter)} >
          +
        </button>

        <button onClick={() => handlerClickSendId(props.onDeleteProduct)}>
          Delete
        </button>
      </Show>

      <Show when={!props.isCart}>
        <button onClick={() => handlerClickSendId(props.onAddProduct)}>
          Add Cart
        </button>
      </Show>

    </div>
  )
}

export default ProductItem
