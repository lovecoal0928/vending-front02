import React from 'react'

const Products = () => {
  return (
    <div className='flex-col w-full h-full'>
        <div className='flex w-full h-[80%] justify-center items-center rounded-t-sm'>Drink Image</div>
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