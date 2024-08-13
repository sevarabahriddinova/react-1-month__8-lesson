import  Container  from '../container/Container'
import React from 'react'
import round from "../../images/round.svg"
import strelka from "../../images/strelka.svg"
import { Button} from 'antd';
import Card2 from '../Card2';
import car from "../../images/car.png"
import car2 from "../../images/car2.png"

const Hero = () => {
  return (
    <Container>
         <div className='hero__wrapper w-full flex items-center gap-7 mt-[200px] '>
            <div className='images flex-1  p-[16px]'>
                <img className='car__img' src={car} alt="" />
                <div className='hero__card'>
                <div className='flex gap-[16px] flex-col'>
                    <h3 className='text-white font-semibold text-[32px] w-[272px]'>The Best Platform for Car Rental</h3>
                    <p className='text-white w-[272px]'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                </div>
                <div>
                <Button className='bg-blue-800 mt-6 w-[120px] h-11' type="primary">Rental Car</Button>
                </div>
                </div>
            </div>
            <div className='flex-1 p-[16px] '>
            <img className='car__img' src={car2} alt="" />
                <div className='hero__card2'>
                <div className='flex gap-[16px] flex-col'>
                    <h3 className='text-white font-semibold text-[32px] w-[272px]'>Easy way to rent a car at a low price</h3>
                    <p className='text-white w-[272px]'>Providing cheap car rental services and safe and comfortable facilities.</p>
                </div>
                <div>
                <Button className='bg-blue-400 mt-6 w-[120px] h-11' type="primary">Rental Car</Button>
                </div>
                </div>
            </div>
        </div>

        <div className='w-full flex items-center mt-[32px]'>
            <div className='flex-1  px-8 py-4 bg-white  shadow-white rounded-[10px]'>
                <div className='flex gap-2 mb-2'>
                    <img src={round} alt="" />
                    <h3 className='font-semibold'>Pick - Up</h3>
                </div>
                    
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='font-bold'>Locations</h3>
                            <p className='font-medium text-gray-400'>Select your city</p>
                        </div>
                    
                        <div>
                            <h3>Date</h3>
                            <p>Select your city</p>
                        </div>
                        
                        <div>
                            <h3>Locations</h3>
                            <p>Select your city</p>
                        </div>
                    </div>
            </div>
            
                <div>
                    <img src={strelka} alt="" />
                </div>

            <div className='flex-1 bg-white shadow-white  px-8 py-4 rounded-[10px]'>
                <div className='flex gap-2 mb-2'>
                        <img src={round} alt="" />
                        <h3 className='font-semibold'>Drop - Off</h3>
                </div>                        
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='font-bold'>Locations</h3>
                                <p className='font-medium text-gray-400'>Select your city</p>
                            </div>
                        
                            <div>
                                <h3>Date</h3>
                                <p>Select your city</p>
                            </div>
                            
                            <div>
                                <h3>Locations</h3>
                                <p>Select your city</p>
                            </div>
                      </div>
            </div>
        </div>


        <div className='section mt-[100px]'>
            <h3 className='text-gray-400 m-4 font-bold'>Popular Car</h3>
           <div className='flex justify-between'> 
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                
           </div>
            
        </div>

        <div className='section2 mt-[50px]'>
        <h2 className='text-gray-400 m-4 font-bold'>Recomendation Car</h2>
        <div className='flex justify-between'> 

           
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                
           </div>
                <div className='flex justify-between mt-[50px] shadow-white'>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                </div>
        </div>

        <Button  className='flex m-auto mt-[50px] h-11' type="primary">Show more car</Button>
    </Container>
  )
}

export default Hero