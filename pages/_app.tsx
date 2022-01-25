import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import cache from "../apollo/cache";

import { createGlobalStyle } from "styled-components"

const client = new ApolloClient({
  cache,
  connectToDevTools: false
})

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background: #F7F7F9;
    color: #333333;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
