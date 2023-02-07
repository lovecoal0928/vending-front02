import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Drinks } from '../typings'

interface Props {
  drink: Drinks
}

const Products = ({drink}: Props) => {

  return (
    <div className='flex-col w-full h-full'>
        <div className='flex w-full h-[80%] justify-center items-center'>
          <Image 
            src={`http://127.0.0.1:8000/media/${drink.src}`}
            width={100}
            height={100}
            className='rounded-t-sm'
            alt={`${drink.name}`}
          />
        </div>
        <div className='flex w-full h-[20%] justify-between'>
            <div className='flex w-[50%] justify-center items-center rounded-bl-sm bg-blue-400'>
                COLD
            </div>
            <div className='flex w-[50%] justify-center items-center rounded-br-sm bg-lime-400'>
                SODA
            </div>
        </div>
    </div>
  )
}

export default Products