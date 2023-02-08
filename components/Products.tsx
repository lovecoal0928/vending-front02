import Image from 'next/image'
import { useRecoilState } from "recoil"
import { CustomizeState, SelectedState } from '../atoms/customizeAtom'
import { Drinks } from '../typings'

interface Props {
  drink: Drinks
}

const Products = ({drink}: Props) => {
  const [selected, setSelected] = useRecoilState(SelectedState)
  const [showCustomize, setShowCustomize] = useRecoilState(CustomizeState)

  return (
    <div className='productBtn w-full h-full'
    onClick={() => {
      setSelected(drink)
      setShowCustomize(true)
    }}>
        <div className='flex w-full h-[80%] justify-center items-center'>
          <Image 
            src={`${drink.src}`}
            width={120}
            height={120}
            className='rounded-t-sm'
            alt={`${drink.name}`}
          />
        </div>
        <div className='flex w-full h-[20%] justify-between text-[1rem]'>
          {drink.hot_flag
            ?<div className='flex w-[50%] justify-center items-center rounded-bl-sm bg-red-500'>
              HOT
            </div>
            :<div className='flex w-[50%] justify-center items-center rounded-bl-sm bg-sky-400'>
              COLD
            </div>
          }
          {drink.soda_flag
          ?<div className='flex w-[50%] justify-center items-center rounded-br-sm bg-lime-500'>
            SODA
          </div>
          :<div className='flex w-[50%] justify-center items-center rounded-br-sm bg-gray-600 text-gray-500'>
            SODA
          </div>
          }
          
        </div>
    </div>
  )
}

export default Products