import { InMemoryCache } from "@apollo/client";
import { products } from "./localstorage"

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: {
          read() {
            return products();
          }
        }
      }
    }
  }
})

export default cache
