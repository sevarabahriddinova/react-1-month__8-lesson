import React from 'react'
import Container from '../container/Container'

const Footer = () => {
  return (
     <Container>
        <div className='footer__wrpper pl-[60px] pt-[80px]'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-blue-600/100 font-bold text-3xl'>MORENT</h3>
                <p className='text-gray-600 w-[292px]'>Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <div>
                <ul>
                    <li>About</li>
                    <li>How it works</li>
                    <li>Featured</li>
                    <li>Partnership</li>
                    <li>Bussiness Relation</li>
                </ul>
                <ul>
                    <li>Community</li>
                    <li>How it works</li>
                    <li>Featured</li>
                    <li>Partnership</li>
                    <li>Bussiness Relation</li>
                </ul>
                <ul>
                    <li>Socials</li>
                    <li>How it works</li>
                    <li>Featured</li>
                    <li>Partnership</li>
                    <li>Bussiness Relation</li>
                </ul>
            </div>
        </div>
     </Container>
  )
}

export default Footer