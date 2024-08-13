import { Button } from 'antd'
import React from 'react'

const Card = ({item}) => {
  return (
    <div>{item.car}
    <p>{item.carType}</p>
        <Button type='primary'>View</Button>
    </div>
  )
}

export default Card