import React from 'react'
import Products from './Products'

const ProductList = () => {
  return (
    <div className='mainBox w-[65%]'>
        <ul className='flex flex-wrap'>
            <li className='productBtn'>
              <Products />
            </li>
            <li className='productBtn'>
              <Products />
            </li>
            <li className='productBtn'>
              <Products />
            </li>
            <li className='productBtn'>
              <Products />
            </li>
            <li className='productBtn'>
              <Products />
            </li>
            <li className='productBtn'>
              <Products />
            </li>
            <li className='productBtn'>
              <Products />
            </li>
            <li className='productBtn'>
              <Products />
            </li>
            <li className='productBtn'>
              <Products />
            </li>
            <li className='productBtn'>
              <Products />
            </li>
            <li className='productBtn'>
              <Products />
            </li>
            <li className='productBtn'>
              <Products />
            </li>
        </ul>
    </div>
  )
}

export default ProductList