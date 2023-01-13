import React from 'react'

const CustomizePanel = () => {
  return (
    <div className='mainBox w-[35%] flex-col'>
      {/* product info */}
      <div className='flex w-full justify-between'>
        <div className='flex-col w-[48.7%] h-[204px]'>
          <div className='customizeBtn h-[60px]'>
            Total price
          </div>
          <div className='customizeBtn h-[60px]'>
            Input
          </div>
          <div className='customizeBtn h-[60px]'>
            my-bottle
          </div>{/* boolean */}
        </div>
        <div className='flex-col w-[48.7%] h-[204px]'>
          <div className='customizeBtn h-[40px]'>
            drink name
          </div>
          <div className='customizeBtn h-[148px]'>
            drink image
          </div>
        </div>
      </div>

      <div className='flex-col w-full'>
        <div className='customizeBtn'>
          drink size
        </div>
        <div className='customizeBtn'>
          gas volume or temp
        </div>
      </div>

      <div className='flex w-full justify-between'>
        <div className='customizeBtn w-[48.7%]'>
          use preset
        </div>
        <div className='customizeBtn w-[48.7%]'>
          with cash
        </div>
      </div>
      <div className='flex w-full justify-between'>
        <div className='customizeBtn w-[48.7%]'>
          cancel
        </div>
        <div className='customizeBtn w-[48.7%]'>
          with phone
        </div>
      </div>
    </div>
  )
}

export default CustomizePanel