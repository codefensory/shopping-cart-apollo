import { ProductType } from "../../types/products";
import ProductItem from "../molecules/productItem";
import styles from "./productsContainer.module.css";

type ProductsContainerProps = {
  isActive: boolean,
  items: ProductType[],
  isCart?: boolean,
  clearMessage?: string
  loading?: boolean
};

const ProductsContainer = (props: ProductsContainerProps) => {
  const { isActive, items, isCart, clearMessage, loading } = props;

  return (
    <div className={`${styles.container}`}>
      <div className={`${!isActive && styles.disable} ${styles.itemContainer}`}>
        {!loading && items.map((item) => (
          <ProductItem
            key={item.id}
            data={item}
            isCart={isCart} />
        ))}

        {items.length === 0 && !loading && <div>{clearMessage}</div>}
        {loading && <div>Loading</div>}
      </div>

    </div>
  )
}

export default ProductsContainer
