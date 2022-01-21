import { ProductType } from "../../types/products";
import styles from "./cartAndProductsBox.module.css"
import ProductsContainer from "./productsContainer";

type CartAndProductsBoxProps = {
  isClear: boolean,
  cartItems?: ProductType[],
  loadingCart?: boolean,
  searchProducts?: ProductType[],
  loadingSearch?: boolean,
};

const CartAndProductsBox = (props: CartAndProductsBoxProps) => {
  const {
    isClear,
    cartItems,
    searchProducts,
    loadingCart,
    loadingSearch } = props;

  return (
    <div className={styles.container}>
      <ProductsContainer
        loading={loadingCart}
        items={cartItems ?? []}
        isActive={isClear}
        isCart={true}
        clearMessage="Cart is empty" />
      <ProductsContainer
        loading={loadingSearch}
        items={searchProducts ?? []}
        isActive={!isClear}
        isCart={false}
        clearMessage="No Items" />
    </div>
  );
}

export default CartAndProductsBox
