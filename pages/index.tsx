import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CustomizeState, SelectedState } from '../atoms/customizeAtom'
import Banner from '../components/Banner'
import CustomizePanel from '../components/CustomizePanel'
import Header from '../components/Header'
import Products from '../components/Products'


const Home = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    axios
    .get(`${process.env.NEXT_PUBLIC_DRINKS_URL}`)
    .then(res=>{
      setProduct(res.data)
      console.log("axiosGetData:", setProduct)
    })
    .catch(err=>{
      console.log("axiosGetErr",err)
    })
  }, [])
  
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <Head>
        <title>vending-mech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* vending-mech */}
      <main className='relative flex-row w-[1000px] h-full p-10 mt-32 mx-auto rounded-3xl bg-gray-300'> {/* bg-sky-500 */}

        {/* vending-banner */}
        <Banner />

        {/* vending-main */}
        <section className='flex my-5 w-full space-x-6'>

          {/* product-list */}
          <div className='mainBox w-[65%]'>
              <ul className='flex flex-wrap'>
                  {product.map(drink => (
                    <li className='productBtn cursor-pointer'>
                        <Products key={drink.id} drink={drink} />
                    </li>
                  ))}
              </ul>
          </div>

          {/* customize-panel */}
          <CustomizePanel/>
        </section>
    
      </main>
    </div>

  )
}

export default Home