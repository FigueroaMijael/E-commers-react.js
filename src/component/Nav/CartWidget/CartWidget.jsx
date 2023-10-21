import { Link } from 'react-router-dom'
import { useState } from 'react';
import CartTotalItems from '../../Cart/CartTotalItems';
import { useContext } from 'react'
import CartContext from '../../../Context/CartContext/CartContext'
 
 const CartWidget = () => {
    
    const [value, setValue] = useState(false);

    const onClick = () => setValue(!value)

    const {cart} = useContext(CartContext)

    return (
        <div>
            <Link to={'/cart'}>
            <button onClick={onClick}>
                <i className="bi bi-cart2"></i>
                {
                    cart.length > 0 ? <CartTotalItems /> : null
                }
            </button>
            </Link>
        </div>
      )
 }
 
 export default CartWidget
