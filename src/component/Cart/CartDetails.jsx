import { useContext } from 'react'
import CartContext from '../../Context/CartContext/CartContext'
import { Link } from 'react-router-dom'
import styles from "./style.module.css"



const CartDetails = () => {


    const { cart, cartTotal,  sumTotal, removeItem} = useContext(CartContext)

    if(cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron Productos en el Carrito!</div>
                        <Link to={"/"} className="btn btn-warning">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }


  return (
    <div>
    CART
    {
        cart.map(el => ( 
            <div className={styles.container} key={el.id}>
                <div className={styles.cardBody}>
                    <p> Product: {el.name}</p>
                    <p> Cantidad: {el.quantity}</p>
                </div>
                <img src={el.img} className={styles.image} />
                <p>USD: {el.quantity * el.price}</p>
                <button onClick={() => removeItem(el.id)} className={styles.cartButton}>Eliminar</button>
            </div>
        ))
    }
    {
        cart.length > 0 &&
        <div>
            <p><b>Total a Pagar</b></p>
            <p>USD: <b>{sumTotal()}</b></p>
        <Link to={'/checkout'}>
         <button className='btn btn-primary'>Finalizar compra</button>
        </Link>
        </div>
    }
</div>
  )
}

export default CartDetails