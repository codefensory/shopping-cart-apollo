import { useState } from "react";
import MainTemplate from "../templates/mainTemplate";

import { useLazyQuery, useQuery } from "@apollo/client"
import { QUERY_FIND_PRODUCTS, QUERY_GET_CART } from "../../apollo/queries";

import debounce from "../../helpers/debounce"
import Show from "../helpers/Show";
import OrderCompleteTemplate from "../templates/orderCompleteTemplate";
import { cartProducts } from "../../apollo/localstorage";

let lastProductID = 1;

const MainPage = () => {
  const [
    getProducts, { data: searchData, loading: loadingSearch }
  ] = useLazyQuery(QUERY_FIND_PRODUCTS);

  const { data: cartData } = useQuery(QUERY_GET_CART);

  const [typing, setTyping] = useState(false);
  const [bought, setBought] = useState(false);

  const handlerOnBuy = () => {
    lastProductID++;
    cartProducts([]);

    setBought(true);
  }

  const handlerOnContinueBuy = () => {
    setBought(false);
  }

  const handlerOnTyping = (searchText: string) => {
    setTyping(true);

    const useTimeout = searchText !== "";
    searchByName(useTimeout, searchText);
  }

  const searchByName = debounce((searchText: string) => {
    getProducts({ variables: { name: searchText } });
    setTyping(false);
  }, 200);

  return (<>
    <Show when={!bought}>
      <MainTemplate
        searchProducts={searchData?.products}
        cartProducts={cartData?.cartProducts}
        isSearching={loadingSearch || typing}
        onBuy={handlerOnBuy}
        onTyping={handlerOnTyping} />
    </Show>

    <Show when={bought}>
      <OrderCompleteTemplate order={lastProductID} onClick={handlerOnContinueBuy} />
    </Show>
  </>)
}

export default MainPage
