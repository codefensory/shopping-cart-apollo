import { useState } from "react";
import { ProductType } from "../../types/products";
import CartAndProductsBox from "../organisms/cartAndProductsBox";
import PriceCartBox from "../organisms/priceCartBox";
import SearchBar from "../organisms/searchBar";

type MainTemplateProps = {
  onTyping: (searchText: string) => void,
  cartProducts?: ProductType[],
  searchProducts?: ProductType[],
  isSearching: boolean,
}

const MainTemplate = (props: MainTemplateProps) => {
  const [isClear, setIsClear] = useState(true);

  const handlerOnChangeIsClear = (isClear: boolean) => {
    setIsClear(isClear)
  }

  return (
    <div>
      <SearchBar
        onChangeIsClear={handlerOnChangeIsClear}
        onTyping={props.onTyping} />
      <CartAndProductsBox
        cartProducts={props.cartProducts}
        searchProducts={props.searchProducts}
        isSearching={props.isSearching}
        isClear={isClear} />
      <PriceCartBox cartProducts={props.cartProducts} />
    </div>
  )
}

export default MainTemplate
