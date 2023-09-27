import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1)

    const agregar = () => {
        setCount( count + 1)
    }

    const quitar = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
  return (
    <div>
        <span onClick={quitar} className='pointer'> - </span>
        <p>{count}</p>
        <span onClick={agregar} className='pointer'> + </span>
    </div>
  )
}

export default Counter