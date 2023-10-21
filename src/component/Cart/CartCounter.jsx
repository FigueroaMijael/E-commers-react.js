import {useState} from 'react'

const CartCounter = ({ quantity, stock  }) => {

    const [count, setCount] = useState(1)

    console.log(quantity)
    const agregar = () => {
        if(quantity < stock ) {
            setCount( count + 1 )
        }
    }

    const quitar = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

  return (
    <div>
        <span className='buttonCounter' onClick={quitar}>-</span>
        <p>{quantity}</p>
        <span className='buttonCounter' onClick={agregar}>+</span>
    </div>
  )
}

export default CartCounter