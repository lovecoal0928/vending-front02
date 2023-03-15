import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

interface ClockNum {
  time: number
}

const DigitalClock = ({ time }:ClockNum) => {
  return(
    <div className='text-white font-bold'>
    <div className="pl-10 text-2xl">
      {dayjs(time).format('YYYY/MM/DD')}
    </div>
      <div className="flex justify-center items-baseline text-5xl">
        {dayjs(time).format('HH:mm:ss')}
        <div className="text-2xl pl-3">{dayjs(time).format('A')}</div>
      </div>
    </div>
  )
}

export default DigitalClock