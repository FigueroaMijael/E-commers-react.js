import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext/CartContext'
import { Link } from 'react-router-dom'
import styles from "./style.module.css"
import CartCounter from './CartCounter'


const CartDetails = () => {


    const { cart, removeItem} = useContext(CartContext)




  return (
    <div>
    CART
    {
        cart.map(el => ( 
            <div className={styles.container} key={el.id}>
                <div className={styles.cardBody}>
                    <p >Product: {el.name}</p>
                    <CartCounter quantity = {el.quantity} stock = {el.stock} />
                </div>
                <img src={el.img} className={styles.image} />
                <button onClick={() => removeItem(el.id)} className={styles.cartButton}>Eliminar</button>
            </div>
        ))
    }
    {
        cart.length > 0 &&
        <Link to={'/checkout'}>
         <button className='btn btn-primary'>Finalizar compra</button>
        </Link>
    }
</div>
  )
}

export default CartDetails