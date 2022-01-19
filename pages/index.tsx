import type { NextPage } from 'next'
import Head from 'next/head'
import MainPage from '../components/pages/mainPage'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Basic Shopping Card System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </>
  )
}

export default Home
