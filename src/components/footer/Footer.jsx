import React from 'react'
import Container from '../container/Container'

const Footer = () => {
  return (
     <Container>
        <div className='footer__wrpper pl-[60px] pt-[80px] flex justify-between'>
            <div className='flex flex-col gap-8'>
                <h3 className='text-blue-600/100 font-bold text-3xl'>MORENT</h3>
                <p className='text-gray-600 w-[292px]'>Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <div className='flex gap-[60px]'>
                <ul className='flex flex-col gap-4'>
                    <li> <a className='font-bold' href="#">About</a></li>
                    <li> <a className='text-gray-400' href="#">How it works</a></li>
                    <li> <a className='text-gray-400' href="#">Fetured</a></li>
                    <li> <a className='text-gray-400' href="#">Partnership</a></li>
                    <li> <a className='text-gray-400' href="#">Bussiness Relation</a></li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <li> <a className='font-bold' href="#">Community</a></li>
                    <li> <a className='text-gray-400' href="#">How it works</a></li>
                    <li> <a className='text-gray-400' href="#">Fetured</a></li>
                    <li> <a className='text-gray-400' href="#">Partnership</a></li>
                    <li> <a className='text-gray-400' href="#">Bussiness Relation</a></li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <li> <a className='font-bold' href="#">Socials</a></li>
                    <li> <a className='text-gray-400'  href="#">How it works</a></li>
                    <li> <a className='text-gray-400' href="#">Fetured</a></li>
                    <li> <a className='text-gray-400' href="#">Partnership</a></li>
                    <li> <a className='text-gray-400' href="#">Bussiness Relation</a></li>
                </ul>
            </div>
        </div>
     </Container>
  )
}

export default Footer