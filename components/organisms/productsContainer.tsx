import { ProductType } from "../../types/products";
import ProductItem from "../molecules/productItem";
import styles from "./productsContainer.module.css";

type ProductsContainerProps = {
  isActive: boolean,
  items: ProductType[],
  isCart?: boolean,
  clearMessage?: string
};

const ProductsContainer = (props: ProductsContainerProps) => {
  const { isActive, items, isCart, clearMessage } = props;

  return (
    <div className={`${styles.container}`}>
      <div className={`${!isActive && styles.disable} ${styles.itemContainer}`}>
        {items.map((item) => (
          <ProductItem
            key={item.id}
            data={item}
            isCart={isCart} />
        ))}

        {items.length === 0 && <div>{clearMessage}</div>}
      </div>

    </div>
  )
}

export default ProductsContainer
