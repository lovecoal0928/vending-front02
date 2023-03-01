import React from 'react'
import * as Bs from 'react-icons/bs'

const Thanks = () => {
  return (
    <>
        <div className='mainBox w-[35%] flex text-gray-600'>
            <div className='customizeBtn flex-col w-full h-full text-green-500 font-bold'>
            <Bs.BsCheckCircle className='w-36 h-36 mb-10 mt-[-40px]' />ご購入ありがとうございました</div>
        </div>
    </>
  )
}

export default Thanks