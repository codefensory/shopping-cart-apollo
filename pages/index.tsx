import type { NextPage } from 'next'
import Head from 'next/head'
import MainPage from '../components/pages/mainPage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Basic Shopping Cart System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </div>
  )
}

export default Home
