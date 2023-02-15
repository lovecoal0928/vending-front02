import Image from 'next/image'
import React from 'react'
import { Form } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import * as Bi from 'react-icons/bi'
import * as Bs from 'react-icons/bs'
import * as Tb from 'react-icons/tb'
import { CustomizeState, SelectedState } from '../atoms/customizeAtom'
import { IconBase } from 'react-icons'

const CustomizePanel = () => {
  const [selected, setSelected] = useRecoilState(SelectedState)
  const [showCustomize, setShowCustomize] = useRecoilState(CustomizeState)

  const handleCancel = () => {
    setShowCustomize(false)
  }

  return (
    <>
      <div className='mainBox w-[35%] flex-col text-gray-600'>
        {/* product info */}
        {showCustomize
        ? <div className='customizeBtn w-full h-[50px]'>
            <p className=''>{selected?.name}</p>
          </div>
        : <div className='customizeBtnF w-full h-[50px]'>
          </div>
        }
        <div className='flex w-full justify-between'>
          <div className='flex-col w-[48.7%] h-[196px]'>
          {showCustomize
          ? <>
              <div className='customizeBtn h-[61px] flex-col p-1 items-start justify-start'>
                <p className='text-[0.9rem] leading-snug'>合計金額</p>
                  <div className='flex items-baseline m-0 ml-auto'>￥
                    <p className='text-3xl'>{selected?.price}</p>
                  </div>
              </div>
              <div className='customizeBtn h-[61px] flex-col p-1 items-start justify-start'>
                <p className='text-[0.9rem] leading-snug'>投入金額</p>
                  <div className='flex items-baseline m-0 ml-auto'>￥
                    <p className='text-3xl'>10000</p>
                  </div>
              </div>
              <div className='customizeBtn h-[50px] text-[1.2rem] cursor-pointer'>
                <Bi.BiExport className='mr-1' />プリセット
              </div>{/* boolean */}
            </>
          : <>
              <div className='customizeBtnF h-[61px] flex-col p-1 items-start justify-start'>
                <p className='text-[0.9rem] leading-snug'>合計金額</p>
              </div>
              <div className='customizeBtnF h-[61px] flex-col p-1 items-start justify-start'>
                <p className='text-[0.9rem] leading-snug'>投入金額</p>
              </div>
              <div className='customizeBtnF h-[50px] text-[1.2rem]' >
                <Bi.BiExport className='mr-1' />プリセット
              </div>
            </>
          }
          </div>

          <div className='flex-col w-[48.7%] h-[196px]'>
          {showCustomize
          ? <>
              <div className='customizeBtn h-[130px]'>
                  <Image 
                    src={`${selected?.src}`}
                    width={105}
                    height={105}
                    className='shadow-product'
                    alt={`${selected?.name}`}
                  />
              </div>
              <label className='customizeBtn h-[50px] cursor-pointer text-[1.2rem]'>
                <Tb.TbBottle className='w-6 h-6 mb-[-3px]'/>マイボトル
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                  />
                </Form>
              </label>{/* boolean */}
            </>
          : <>
              <div className='customizeBtnF h-[130px]'>
                <Bs.BsImage className='w-10 h-10' />
              </div>
              <label className='customizeBtnF h-[50px] text-[1.2rem]'>
                <Tb.TbBottle className='w-6 h-6 mb-[-3px]'/>マイボトル
              </label>{/* boolean */}
            </>
          }
          </div>
        </div>

        <div className='flex-col w-full'>
          {showCustomize
          ? <>
              <div className='customizeBtn h-16'>
                drink size
              </div>
              <div className='customizeBtn h-16'>
                gas volume or temp
              </div>
            </>
          : <>
              <div className='customizeBtnF h-16'>
                drink size
              </div>
              <div className='customizeBtnF h-16'>
                gas volume or temp
              </div>
            </>
          }
        </div>

        <div className='flex w-full justify-between h-20'>
          {showCustomize
          ? <>
              <div className='customizeBtn w-[48.7%] text-white bg-red-500 cursor-pointer'
                onClick={handleCancel}>
                キャンセル
              </div>
              <div className='customizeBtn w-[48.7%]'>
                <Bs.BsCartCheck />購入
              </div>
            </>
          : <>
              <div className='customizeBtnF w-[48.7%]'
                onClick={handleCancel}>
                キャンセル
              </div>
              <div className='customizeBtnF w-[48.7s%]'>
                <Bs.BsCartCheck />購入
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default CustomizePanel