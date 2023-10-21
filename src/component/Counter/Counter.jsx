import React, { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext/CartContext'

const Counter = ({stock ,onAdd,  quantity = 1}) => {
    const [count, setCount] = useState(quantity)


    const agregar = () => {
        if(count >= stock ) {
            console.log('es mas que el stock')
        }else {
            setCount( count + 1 )
        }
    }

    const quitar = () => {
        if(count <= stock){
            setCount(count - 1)
        }
    }

  return (
    <div>
        <span className='buttonCounter' onClick={quitar}>-</span>
        <p>{count}</p>
        <span className='buttonCounter' onClick={agregar}>+</span>
        <button onClick={() => onAdd(count)}> agregar al carrito</button>
    </div>
  )
}

export default Counter