import { InMemoryCache } from "@apollo/client";
import { cartProducts, products } from "./localstorage"

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: {
          read(_, { variables }) {
            const name = variables?.name;
            if (!name || name === "") return [];

            return products().filter((product) =>
              product.name.toLowerCase().includes(name.toLowerCase()));
          }
        },
        cartProducts: {
          read() {
            return cartProducts();
          },
        }
      }
    }
  }
})

export default cache
