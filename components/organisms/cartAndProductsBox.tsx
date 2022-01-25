import { addCartProduct, decrementCartProductCount, deleteCartProduct, incrementCartProductCount } from "../../apollo/mutations";
import { ProductType } from "../../types/products";
import ClearCartMessage from "../molecules/clearCartMessage";
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
        ClearMessage={() => <ClearCartMessage />}
        onDeleteProduct={deleteCartProduct}
        onIncrementCounter={incrementCartProductCount}
        onDecrementCounter={decrementCartProductCount}
      />

      <ProductsContainer
        loading={props.isSearching}
        items={props.searchProducts ?? []}
        isActive={!props.isClear}
        ClearMessage={() => <ClearCartMessage title="Search is empty" subtitle="Seems that the product you are looking for does not exist" />}
        onAddProduct={addCartProduct} />
    </CartAndProductsBoxContainer>
  );
}

export default CartAndProductsBox
