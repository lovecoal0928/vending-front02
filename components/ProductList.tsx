import React from 'react'
import { Drinks } from '../typings'
import Products from './Products'

interface Props {
  drinks: Drinks
}

const ProductList = ({drinks}: Props) => {
  return (
    <div className='mainBox w-[65%]'>
        <ul className='flex flex-wrap'>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
            <li className='productBtn'>
              <Products drinks={drinks}/>
            </li>
        </ul>
    </div>
  )
}

export default ProductList