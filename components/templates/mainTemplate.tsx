import { useState } from "react";
import { ProductType } from "../../types/products";
import CartAndProductsBox from "../organisms/cartAndProductsBox";
import SearchBar from "../organisms/searchBar";

type MainTemplateProps = {
  onTyping: (searchText: string) => void,
  cartItems?: ProductType[],
  loadingCart?: boolean,
  searchProducts?: ProductType[],
  loadingSearch?: boolean,
}

const MainTemplate = (props: MainTemplateProps) => {
  const {
    onTyping,
    cartItems,
    searchProducts,
    loadingCart,
    loadingSearch } = props;

  const [isClear, setIsClear] = useState(true);

  const handlerOnChangeIsClear = (isClear: boolean) => {
    setIsClear(isClear)
  }

  return (
    <div>
      <SearchBar onChangeIsClear={handlerOnChangeIsClear} onTyping={onTyping} />

      <CartAndProductsBox
        loadingCart={loadingCart}
        loadingSearch={loadingSearch}
        cartItems={cartItems}
        searchProducts={searchProducts}
        isClear={isClear} />
    </div>
  )
}

export default MainTemplate
