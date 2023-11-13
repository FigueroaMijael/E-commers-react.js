import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Counter = ({stock ,onAdd}) => {
    const [count, setCount] = useState(1)
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);



    const incrementarStock = () => {
        if(count < itemStock ) {
            setCount(count + 1)
        }
    }

    const decrementarStock = () => {
        if(count > 1 ){
            setCount(count - 1)
        }
    }

    const addToCart = (quantity) => {
        if (count < itemStock) {
            setCount(1);
            setItemStock(itemStock - quantity);
            setVendido(true);
            onAdd(quantity);
        } 

    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

  return (
    <div>
        <div className='countContainer'>
        <span className='buttonCounter' onClick={decrementarStock}>-</span>
        <p>{count}</p>
        <span className='buttonCounter' onClick={incrementarStock}>+</span>
        </div>
        <div>
        <button type="button" className="btn btn-outline-warning" onClick={() => { addToCart(count) }}>Agregar al Carrito</button>
        <br />
        {vendido ? <Link to={"/cart"} className="btn btn-outline-warning">Terminar Mi Compra</Link> : " "}
        </div>
    </div>
  )
}

export default Counter