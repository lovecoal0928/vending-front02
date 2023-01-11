import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import CustomizePanel from '../components/CustomizePanel'
import Header from '../components/Header'
import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <Head>
        <title>vending-mech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* vending-mech */}
      <main className='relative flex-row w-[1000px] h-full p-10 mt-32 mx-auto rounded-3xl bg-sky-500'>
        {/* vending-banner */}
        <Banner />
        {/* vending-main */}
        <section className='flex my-5 w-full space-x-6'>
          {/* product-list */}
          <ProductList />
          {/* customize-panel */}
          <CustomizePanel />
        </section>
    
      </main>
    </div>

  )
}

export default Home
