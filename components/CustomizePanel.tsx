import React from 'react'
import { useRecoilState } from 'recoil'
import { CustomizeState, SelectedState } from '../atoms/customizeAtom'
import { Drinks } from '../typings'

const CustomizePanel = () => {
  const [selected, setSelected] = useRecoilState(SelectedState)
  const [showCustomize, setShowCustomize] = useRecoilState(CustomizeState)

  const handleCancel = () => {
    setShowCustomize(false)
  }

  return (
    <div className='mainBox w-[35%] flex-col text-gray-600'>
      {/* product info */}
      <div className='customizeBtn w-full h-[50px]'>
        {showCustomize &&
          <p className=''>{selected?.name}</p>
        }
      </div>
      <div className='flex w-full justify-between'>

        <div className='flex-col w-[48.7%] h-[196px]'>
          <div className='customizeBtn h-[61px] flex-col p-1 items-start justify-start'>
            <p className='text-base'>合計金額</p>
            {showCustomize &&
              <div className='flex items-baseline'>￥
                <p className='text-2xl'>{selected?.price}</p>
              </div>
            }
          </div>
          <div className='customizeBtn h-[61px] flex-col p-1 items-start justify-start'>
            <p className='text-[0.8rem] leading-snug'>投入金額</p>
            {showCustomize &&
              <div className='flex items-baseline'>￥
                <p className='text-2xl'>{selected?.price}</p>
              </div>
            }
          </div>
          <div className='customizeBtn h-[50px]'>
            use-preset
          </div>{/* boolean */}
        </div>

        <div className='flex-col w-[48.7%] h-[196px]'>
          <div className='customizeBtn h-[130px]'>
            drink image
          </div>
          <div className='customizeBtn h-[50px]'>
            my-bottle
          </div>{/* boolean */}
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
        <div className='customizeBtn w-[31.7%] bg-red-500 cursor-pointer'
          onClick={handleCancel}>
          CANCEL
        </div>
        <div className='customizeBtn w-[31.7%]'>
          with cash
        </div>
        <div className='customizeBtn w-[31.7%]'>
          with phone
        </div>
      </div>
    </div>
  )
}

export default CustomizePanel