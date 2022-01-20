import { useState } from "react";
import CartAndProductsBox from "../organisms/cartAndProductsBox";
import SearchBar from "../organisms/searchBar";

type MainTemplateProps = {
  onSearch: (searchText: string) => void,
}

const MainTemplate = (props: MainTemplateProps) => {
  const { onSearch } = props;
  const [isClear, setIsClear] = useState(true);

  const handlerOnChangeIsClear = (isClear: boolean) => {
    setIsClear(isClear)
  }

  return (
    <div>
      <SearchBar onChangeIsClear={handlerOnChangeIsClear} onSearch={onSearch} />
      <CartAndProductsBox isClear={isClear} />
    </div>
  )
}

export default MainTemplate
