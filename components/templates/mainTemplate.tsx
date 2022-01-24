import { useState } from "react";
import { ProductType } from "../../types/products";
import CartAndProductsBox from "../organisms/cartAndProductsBox";
import PriceCartBox from "../organisms/priceCartBox";
import SearchBar from "../organisms/searchBar";
import { MainTemplateContainer, MidContainer } from "./mainTemplate.style";

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
    <MainTemplateContainer>

      <MidContainer style={{ paddingRight: "40px" }}>
        <SearchBar
          onChangeIsClear={handlerOnChangeIsClear}
          onTyping={props.onTyping} />
        <CartAndProductsBox
          cartProducts={props.cartProducts}
          searchProducts={props.searchProducts}
          isSearching={props.isSearching}
          isClear={isClear} />
      </MidContainer>

      <MidContainer style={{ paddingLeft: "40px" }}>
        <PriceCartBox cartProducts={props.cartProducts} />
      </MidContainer>

    </MainTemplateContainer>
  )
}

export default MainTemplate
