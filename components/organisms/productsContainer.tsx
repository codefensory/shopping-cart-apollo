import { ProductType } from "../../types/products";
import For from "../helpers/For";
import Show from "../helpers/Show";
import ProductItem from "../molecules/productItem";
import { PCLoadingContainer, ProductContainerStyle } from "./productsContainer.style";

type ProductsContainerProps = {
  isActive: boolean,
  items: ProductType[],
  isCart?: boolean,
  ClearMessage?: () => JSX.Element;
  loading?: boolean
  onAddProduct?: (id: number) => void,
  onDeleteProduct?: (id: number) => void,
  onIncrementCounter?: (id: number) => void,
  onDecrementCounter?: (id: number) => void,
};

const ProductsContainer = (props: ProductsContainerProps) => {
  const { ClearMessage } = props;
  return (
    <ProductContainerStyle active={props.isActive}>

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
        {ClearMessage && <ClearMessage />}
      </Show>

      <Show when={props.loading}>
        <PCLoadingContainer>Loading</PCLoadingContainer>
      </Show>

    </ProductContainerStyle>
  )
}

export default ProductsContainer
