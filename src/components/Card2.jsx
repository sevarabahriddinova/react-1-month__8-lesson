import { AiFillHeart } from "react-icons/ai"; 
import React from 'react'
import car from "../images/car1.png"
import fon from "../images/fon.svg"
import { Button} from 'antd';

const Card2 = () => {
  return (
    <div>
      <div className='card__wrapper p-8 bg-white w-[308px]'>
        <div className='card__title'>
           <div className="flex items-center justify-between">   
           <h3 className='font-bold'>Koenigsegg</h3>
           <AiFillHeart className="text-red-700 w-[24px] h-[24px]" />
           </div>
            <p className='font-bold text-gray-600'>Sport</p>
            <div className='flex flex-col gap-8 mt-8'>
                <img className=" " src={car} alt="" />
                <img src={fon} alt="" />
            </div>
            <div className='flex justify-between mt-8'>
                <span className='flex gap-1 items-center'>$99.00/ <p className='text-gray-500'>day</p></span>
                <Button className="w-[120px] h-11" type="primary">Rent Now</Button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Card2
