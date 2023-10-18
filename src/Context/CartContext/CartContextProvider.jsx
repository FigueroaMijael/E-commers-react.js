import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log("CONTEXT", cart)

    const addItem = (data, q) => {
        const {id} = data
        

        if( isInCart(id) ){
            const newCart = cart.map(el => {
                
                if(el.id === id){
                    if(el.quantity < el.stock){
                        return {
                            ...el,
                            quantity: el.quantity + q
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
                    ...data, quantity: q
                }
            ])
        }
    };

    const isInCart = (id) => {
        return cart.some(cartItem => cartItem.id === id)
    }


    const removeItem = (id, q) => {
        const newCart = cart.filter((el) => el.id !== id);
        setCart(newCart)
    };

    const clear = () => {
        setCart([])
    }

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
    }

  return (
    <CartContext.Provider value = {values}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider