import { useState } from "react";
import { ProductType } from "../../types/products";
import CartAndProductsBox from "../organisms/cartAndProductsBox";
import SearchBar from "../organisms/searchBar";

type MainTemplateProps = {
  onSearch: (searchText: string) => void,
  cartItems?: ProductType[],
  searchItems?: ProductType[],
}

const MainTemplate = (props: MainTemplateProps) => {
  const { onSearch, cartItems, searchItems } = props;
  const [isClear, setIsClear] = useState(true);

  const handlerOnChangeIsClear = (isClear: boolean) => {
    setIsClear(isClear)
  }

  return (
    <div>
      <SearchBar onChangeIsClear={handlerOnChangeIsClear} onSearch={onSearch} />
      <CartAndProductsBox
        cartItems={cartItems}
        searchItems={searchItems}
        isClear={isClear} />
    </div>
  )
}

export default MainTemplate
