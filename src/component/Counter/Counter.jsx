import React, { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext/CartContext'

const Counter = ({stock ,onAdd}) => {
    const [count, setCount] = useState(1)

    const agregar = () => {
        if(count < stock) {
            setCount( count + 1)
        }
    }

    const quitar = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
  return (
    <div>
        <button onClick={agregar}> + </button>
        <span>{ count }</span>
        <button onClick={quitar}> - </button>
        <button onClick={() => onAdd(count) }>Agregar al carrito</button>
    </div>
  )
}

export default Counter