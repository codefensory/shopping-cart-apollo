import { gql } from "@apollo/client"

export const QUERY_FIND_PRODUCTS = gql`
  query GetProducts($name: String!) {
    products(name: $name) @client {
        id
        name
        price
    }
  }
`

export const QUERY_GET_CART = gql`
  query GetCartProducts {
    cartProducts @client {
      id
      name
      price
      count
    }
  }
`
