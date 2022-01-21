import { useState } from "react";
import MainTemplate from "../templates/mainTemplate";

import { gql, useLazyQuery } from "@apollo/client"

const QUERY_FIND_PRODUCTS = gql`
  query GetProducts($name: String!) {
    products(name: $name) @client {
        id
        name
        price
    }
  }
`

let debounceTimeout: NodeJS.Timeout;

const debounce = (fn: (...params: any[]) => void, timeout: number) => {
  return (useTimeout: boolean, ...params: any[]) => {
    clearTimeout(debounceTimeout);
    if (useTimeout) {
      debounceTimeout = setTimeout(() => fn(...params), timeout);
    } else {
      fn(...params);
    }
  }
}

const MainPage = () => {
  const [
    getProducts, { data: searchData, loading: loadingSearch }
  ] = useLazyQuery(QUERY_FIND_PRODUCTS);

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
        loadingSearch={loadingSearch || typing}
        onTyping={handlerOnTyping} />
    </div>
  )
}

export default MainPage
