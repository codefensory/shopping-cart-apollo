import { addCartProduct, decrementCartProductCount, deleteCartProduct, incrementCartProductCount } from "../../apollo/mutations";
import { ProductType } from "../../types/products";
import { CartAndProductsBoxContainer } from "./cartAndProductsBox.style";
import ProductsContainer from "./productsContainer";

type CartAndProductsBoxProps = {
  isClear: boolean,
  cartProducts?: ProductType[],
  isSearching?: boolean,
  searchProducts?: ProductType[],
};

const CartAndProductsBox = (props: CartAndProductsBoxProps) => {
  return (
    <CartAndProductsBoxContainer>
      <ProductsContainer
        isCart
        items={props.cartProducts ?? []}
        isActive={props.isClear}
        clearMessage="Cart is empty"
        onDeleteProduct={deleteCartProduct}
        onIncrementCounter={incrementCartProductCount}
        onDecrementCounter={decrementCartProductCount}
      />

      <ProductsContainer
        loading={props.isSearching}
        items={props.searchProducts ?? []}
        isActive={!props.isClear}
        clearMessage="No Items"
        onAddProduct={addCartProduct} />
    </CartAndProductsBoxContainer>
  );
}

export default CartAndProductsBox
