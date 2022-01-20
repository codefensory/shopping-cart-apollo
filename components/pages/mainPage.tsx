import { FunctionComponent } from "react";
import MainTemplate from "../templates/mainTemplate";

import { useQuery, gql } from "@apollo/client"

const DEMO_QUERY = gql`
  query GetProducts {
    products {
        id
        name
        price
    }
  }
`

const MainPage: FunctionComponent = () => {
  const { data, loading, error } = useQuery(DEMO_QUERY);

  const handlerOnSearch = (searchText: string) => {

  }

  return (
    <div>
      <MainTemplate onSearch={handlerOnSearch} />
    </div>
  )
}

export default MainPage
