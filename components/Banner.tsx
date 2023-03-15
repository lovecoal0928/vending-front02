import React from 'react'
import DigitalClock from './DigitalClock'


const Banner = () => {
  return (
    <div className='flex w-full justify-center mb-5 space-x-24'>
        <div className='bannerBox'>
          <DigitalClock time={time} />
        </div>
        <div className='bannerBox'>Weather App</div>
    </div>
  )
}

export default Banner