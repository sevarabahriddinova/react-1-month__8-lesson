import React from 'react'
import  Container  from '../container/Container'
import cars from "../../db"
import Card from "../card/Card"

const MostProducts = () => {
    console.log(cars)
  return (
    <Container>
        <div className='grid grid-cols-4 bg-slate-600 mb-[100px]'>
                {
                  cars?.slice(0,4)?.map((item,index) => 
                    <Card item={item} key={index}/>
                  )
                }
        </div>
    </Container>
    
  )
}

export default MostProducts