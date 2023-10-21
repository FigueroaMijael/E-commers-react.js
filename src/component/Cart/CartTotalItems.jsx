import React from 'react'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext/CartContext'
 
const CartTotalItems = () => {

    const {cart} = useContext(CartContext)

    const itemQuantity = cart.reduce((acc, el) => acc + el.quantity, 0)
  return <span className='CartItemTotal'>{itemQuantity}</span>
}

export default CartTotalItems