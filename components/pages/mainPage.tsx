import { useState } from "react";
import MainTemplate from "../templates/mainTemplate";

import { useLazyQuery, useQuery } from "@apollo/client"
import { QUERY_FIND_PRODUCTS, QUERY_GET_CART } from "../../apollo/queries";

import debounce from "../../helpers/debounce"

const MainPage = () => {
  const [
    getProducts, { data: searchData, loading: loadingSearch }
  ] = useLazyQuery(QUERY_FIND_PRODUCTS);

  const { data: cartData } = useQuery(QUERY_GET_CART);

  const [typing, setTyping] = useState(false);

  const handlerOnTyping = (searchText: string) => {
    setTyping(true);

    const useTimeout = searchText !== "";
    searchByName(useTimeout, searchText);
  }

  const searchByName = debounce((searchText: string) => {
    getProducts({ variables: { name: searchText } });
    setTyping(false);
  }, 200);

  return (
    <div>
      <MainTemplate
        searchProducts={searchData?.products}
        cartProducts={cartData?.cartProducts}
        isSearching={loadingSearch || typing}
        onTyping={handlerOnTyping} />
    </div>
  )
}

export default MainPage
