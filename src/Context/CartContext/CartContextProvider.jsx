import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    
    const isInCart = (id) => {
        return cart.some(cartItem => cartItem.id === id)
    }

    const addItem = (item, quantity) => {
        const {id} = item

        if( isInCart(id) ){
            const newCart = cart.map(el => {
                if(el.id === id){
                    if(el.quantity < el.stock){
                        return {
                            ...el,
                            quantity: el.quantity + quantity
                        };
                    }
                }
                return el
            })
            setCart(newCart)
        }
        else{
            setCart([
                ...cart,
                {
                    ...item, quantity: quantity
                }
            ])
        }
    };


    const removeItem = (id, quantity) => {
        const newCart = cart.filter((el) => el.id !== id);
        setCart(newCart)
    };

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0)
    }
    const sumTotal = () => {
        return cart.reduce((total, item) => total += item.quantity * item.price, 0);
    }

    const clear = () => {
        setCart([])
    }


    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        cartTotal,
        sumTotal
    }

  return (
    <CartContext.Provider value = {values}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider