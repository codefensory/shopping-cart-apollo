import { InMemoryCache } from "@apollo/client";
import { cartProducts, products } from "./localstorage"

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: {
          read() {
            return products();
          }
        },
        cartProducts: {
          read() {
            return cartProducts();
          }
        }
      }
    }
  }
})

export default cache
