import { FunctionComponent } from "react";
import MainTemplate from "../templates/mainTemplate";

import { useQuery, gql } from "@apollo/client"

const QUERY_CART_PRODUCTS = gql`
  query GetCartProducts {
    cartProducts {
        id
        name
        price
    }
  }
`

const MainPage: FunctionComponent = () => {
  const { data } = useQuery(QUERY_CART_PRODUCTS);

  const handlerOnSearch = (searchText: string) => {

  }

  return (
    <div>
      <MainTemplate cartItems={data?.cartProducts} onSearch={handlerOnSearch} />
    </div>
  )
}

export default MainPage
