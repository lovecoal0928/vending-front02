import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { ThanksState } from '../atoms/customizeAtom'
import Banner from '../components/Banner'
import CustomizePanel from '../components/CustomizePanel'
import Thanks from '../components/Thanks'
import Header from '../components/Header'
import Products from '../components/Products'
import { Drinks } from '../typings'
interface Props {
  drink: Drinks
}
const Home = ({drink}: Props) => {

  const [product, setProduct] = useState([])
  const [showThanks, setShowThanks] = useRecoilState(ThanksState)

  useEffect(() => {
    let timeout:NodeJS.Timeout
    if(showThanks) {
      timeout = setTimeout(() => {
        setShowThanks(false)
      }, 4000)
    }
    return () => clearTimeout(timeout)
  }, [showThanks])

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
      {/* <Header /> */}

      {/* vending-mech */}
      <main className='relative flex-row w-[1000px] h-full p-10 mt-10 mx-auto rounded-3xl bg-sky-400'>

        {/* vending-banner */}
        <Banner />

        {/* vending-main */}
        <section className='flex my-5 w-full space-x-6'>

          {/* product-list */}
          <div className='mainBox w-[65%]'>
              <ul className='flex justify-center items-center flex-wrap'>
                  {product.map(drink => (
                    <li className='w-[22%] m-[1%] cursor-pointer'>
                        <Products key={drink.id} drink={drink} />
                    </li>
                  ))}
              </ul>
          </div>

          {/* customize-panel */}
          {showThanks
          ? <Thanks />
          : <CustomizePanel />
          }
        </section>
        <Image
          src="/../public/coinput.png"
          width={180}
          height={180}
          className='mr-20 ml-auto'
          alt="お金投入口"
        />
    
      </main>
    </div>

  )
}

export default Home