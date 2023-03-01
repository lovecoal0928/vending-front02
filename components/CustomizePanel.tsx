import Image from 'next/image'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import * as Bi from 'react-icons/bi'
import * as Bs from 'react-icons/bs'
import * as Tb from 'react-icons/tb'
import { BottleState, CustomizeState, SelectedState } from '../atoms/customizeAtom'

const CustomizePanel = () => {
  const [selected, setSelected] = useRecoilState(SelectedState)
  const [showCustomize, setShowCustomize] = useRecoilState(CustomizeState)

  const [currentSize, setCurrentSize] = useState(1)
  const [currentHotTemp, setCurrentHotTemp] = useState(60)
  const [currentColdTemp, setCurrentColdTemp] = useState(0)
  const [useBottle, setUseBottle] = useRecoilState(BottleState)

  const [currentPrice, setCurrentPrice] = useState(0)

  // カスタマイズのキャンセル
  const handleCancel = () => {
    setShowCustomize(false)
    setUseBottle(false)
    setCurrentSize(1)
    setCurrentHotTemp(60)
    setCurrentColdTemp(25)
  }

  // 商品の購入
  const handlePurchase = () => {
    setShowCustomize(false)
    setUseBottle(false)
    setCurrentSize(1)
    setCurrentHotTemp(60)
    setCurrentColdTemp(25)
  }

  // マイボトルのオンオフ
  const setBottle = () => {
    setUseBottle(!useBottle)
  }

  const changePrice = () => {
    const CurrentPrice=(selected?.price)
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
              <div className='customizeBtn h-[61px] flex-col p-1 justify-start'>
                <p className='text-[0.9rem] leading-snug'>合計金額</p>
                  <div className='flex items-baseline m-0 ml-auto'>￥
                    <p className='text-3xl'>{selected?.price}</p>
                  </div>
              </div>
              <div className='customizeBtn h-[61px] flex-col p-1 justify-start'>
                <p className='text-[0.9rem] leading-snug'>投入金額</p>
                  <div className='flex items-baseline m-0 ml-auto'>￥
                    <p className='text-3xl'>10000</p>
                  </div>
              </div>
              <div className='customizeBtn h-[50px] text-[1.2rem] cursor-pointer active:bg-[#fff]'>
                <Bi.BiExport className='w-8 h-8 pr-1' />プリセット
              </div>{/* boolean */}
            </>
          : <>
              <div className='customizeBtnF h-[61px] flex-col p-1 justify-start'>
                <p className='text-[0.9rem] leading-snug'>合計金額</p>
              </div>
              <div className='customizeBtnF h-[61px] flex-col p-1 justify-start'>
                <p className='text-[0.9rem] leading-snug'>投入金額</p>
              </div>
              <div className='customizeBtnF h-[50px] text-[1.2rem]' >
                <Bi.BiExport className='w-8 h-8 pr-1' />プリセット
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
                    className='shadow-product rounded-md'
                    alt={`${selected?.name}`}
                  />
              </div>
              {useBottle
              ? <div className='customizeBtn h-[50px] cursor-pointer text-[1.2rem] bg-green-300 active:bg-[#fff]' onClick={setBottle} onChange={changePrice}>
                  <Bs.BsCheck2Circle className='w-8 h-8 mb-[-3px] pr-2' />マイボトル
                </div>
              : <div className='customizeBtn h-[50px] cursor-pointer text-[1.2rem] active:bg-[#fff]' onClick={setBottle}>
                  <Tb.TbBottle className='w-8 h-8 mb-[-3px] pr-2' />マイボトル
                </div>
              }
            </>
          : <>
              <div className='customizeBtnF h-[130px]'>
                <Bs.BsImage className='w-10 h-10' />
              </div>
              <div className='customizeBtnF h-[50px] text-[1.2rem]'>
                <Tb.TbBottle className='w-8 h-8 mb-[-3px] pr-2'/>マイボトル
              </div>
            </>
          }
          </div>
        </div>

        <div className='flex-col w-full'>
          {showCustomize
          ? <>
              <div className='customizeBtn h-16 flex-col pt-2 p-1 justify-start'>
                <div className='flex flex-row text-[1rem] mb-[-5px]'>
                  サイズ：<p className='leading-3 text-[1.3rem] pl-2 flex w-14 justify-center items-center'>{currentSize}mL</p>
                </div>
                <input
                  type="range"
                  min="300"
                  max="600"
                  step="100"
                  value={currentSize}
                  className='sizeSeek'
                  onChange={(ev:React.ChangeEvent<HTMLInputElement>) => {
                    setCurrentSize(parseInt(ev.target.value))
                    changePrice
                  }}
                />
              </div>
              <div className='customizeBtn h-16 flex-col pt-2 p-1 justify-start'>
                {selected?.hot_flag
                ? <>
                    <div className='flex flex-row text-[1rem] mb-[-5px]'>
                      温度：<p className='leading-3 text-[1.3rem] pl-2 flex w-14 justify-center items-center'>{currentHotTemp}℃</p>
                    </div>
                    <input
                      type="range"
                      min="60"
                      max="100"
                      step="1"
                      value={currentHotTemp}
                      className='hotSeek'
                      onChange={(ev:React.ChangeEvent<HTMLInputElement>) => {
                        setCurrentHotTemp(parseInt(ev.target.value))
                        changePrice
                      }}
                    />
                  </>
                : <>
                    <div className='flex flex-row text-[1rem] mb-[-5px]'>
                      温度：<p className='leading-3 text-[1.3rem] pl-2 flex w-14 justify-center items-center'>{currentColdTemp}℃</p>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="25"
                      step="1"
                      value={currentColdTemp}
                      className='coldSeek'
                      onChange={(ev:React.ChangeEvent<HTMLInputElement>) => {
                        setCurrentColdTemp(parseInt(ev.target.value))
                        changePrice
                      }}
                    />
                  </>
                }
              </div>
            </>
          : <>
              <div className='customizeBtnF h-16'>
                サイズ
              </div>
              <div className='customizeBtnF h-16'>
                温度
              </div>
            </>
          }
        </div>

        <div className='flex w-full justify-between h-20'>
          {showCustomize
          ? <>
              <div className='customizeBtn w-[48.7%] text-white bg-red-500 active:bg-[#f66] cursor-pointer'
                onClick={handleCancel}>
                キャンセル
              </div>
              <div className='customizeBtn w-[48.7%] cursor-pointer' onClick={handlePurchase}>
                <Bs.BsCartCheck className='w-8 h-8 pr-2' />購入
              </div>
            </>
          : <>
              <div className='customizeBtnF w-[48.7%]'
                onClick={handleCancel}>
                キャンセル
              </div>
              <div className='customizeBtnF w-[48.7%]'>
                <Bs.BsCartCheck className='w-8 h-8 pr-2' />購入
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default CustomizePanel