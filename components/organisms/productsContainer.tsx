import { ProductType } from "../../types/products";
import For from "../helpers/For";
import Show from "../helpers/Show";
import ProductItem from "../molecules/productItem";
import styles from "./productsContainer.module.css";

type ProductsContainerProps = {
  isActive: boolean,
  items: ProductType[],
  isCart?: boolean,
  clearMessage?: string
  loading?: boolean
  onAddProduct?: (id: number) => void,
  onDeleteProduct?: (id: number) => void,
  onIncrementCounter?: (id: number) => void,
  onDecrementCounter?: (id: number) => void,
};

const ProductsContainer = (props: ProductsContainerProps) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${!props.isActive && styles.disable} ${styles.itemContainer}`}>

        <Show when={!props.loading}>
          <For each={props.items}>
            {(item: ProductType) => (
              <ProductItem
                onAddProduct={props.onAddProduct}
                onDeleteProduct={props.onDeleteProduct}
                onDecrementCounter={props.onDecrementCounter}
                onIncrementCounter={props.onIncrementCounter}
                key={item.id}
                data={item}
                isCart={props.isCart} />
            )}
          </For>
        </Show>

        <Show when={props.items.length === 0 && !props.loading}>
          <div>{props.clearMessage}</div>
        </Show>

        <Show when={props.loading}>
          <div>Loading</div>
        </Show>
      </div>

    </div>
  )
}

export default ProductsContainer
