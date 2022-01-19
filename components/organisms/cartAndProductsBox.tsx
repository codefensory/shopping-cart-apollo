import { ProductType } from "../../types/products";
import styles from "./cartAndProductsBox.module.css"
import ProductsContainer from "./productsContainer";

type CartAndProductsBoxProps = {
  isClear: boolean,
  cartItems?: ProductType[],
  searchItems?: ProductType[]
};

const CartAndProductsBox = (props: CartAndProductsBoxProps) => {
  const { isClear, cartItems, searchItems } = props;

  return (
    <div className={styles.container}>
      <ProductsContainer
        items={cartItems ?? []}
        isActive={isClear}
        isCart={true}
        clearMessage="Your cart is empty" />
      <ProductsContainer
        items={searchItems ?? []}
        isActive={!isClear}
        isCart={false}
        clearMessage="Press enter for search" />
    </div>
  );
}

export default CartAndProductsBox
