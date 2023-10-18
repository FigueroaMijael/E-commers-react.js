import React, { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import styles from "./style.module.css"

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
                    <p >Cantidad: {el.quantity}</p>
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