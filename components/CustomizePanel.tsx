import Image from 'next/image'
import React from 'react'
import { Form } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { CustomizeState, SelectedState } from '../atoms/customizeAtom'

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
            <p className='text-[0.9rem] leading-snug'>合計金額</p>
            {showCustomize &&
              <div className='flex items-baseline m-0 ml-auto'>￥
                <p className='text-3xl'>{selected?.price}</p>
              </div>
            }
          </div>
          <div className='customizeBtn h-[61px] flex-col p-1 items-start justify-start'>
            <p className='text-[0.9rem] leading-snug'>投入金額</p>
            {showCustomize &&
              <div className='flex items-baseline m-0 ml-auto'>￥
                <p className='text-3xl'>10000</p>
              </div>
            }
          </div>
          <div className='customizeBtn h-[50px] text-[1rem] cursor-pointer'>
            プリセットを使用
          </div>{/* boolean */}
        </div>

        <div className='flex-col w-[48.7%] h-[196px]'>
          <div className='customizeBtn h-[130px]'>
            {showCustomize &&
              <Image 
                src={`${selected?.src}`}
                width={105}
                height={105}
                className='shadow-product'
                alt={`${selected?.name}`}
              />
            }
          </div>
          <label className='customizeBtn h-[50px] cursor-pointer'>
            <p className='flex text-[1.2rem]'>マイボトル
              <Form>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                />
              </Form>
            </p>
          </label>{/* boolean */}
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