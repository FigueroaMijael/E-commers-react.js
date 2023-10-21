import React from 'react'
import Counter from '../Counter/Counter'
import style from './style.module.css'

const ItemDetails = ({data, onAdd}) => {

  return (
    <div className={style.contianer}>
        <h5 className={style.name}>{data.name}</h5>
        <img src={data.img} alt="" className={style.image}/>
        <p>
            Descripcion: {data.description}
        </p>
        <p>
            Precio: {data.price}
        </p>
        <p>
          stock: {data.stock}
        </p>
        <p>
            Categoria: {data.category}
        </p>
        <Counter quantity = {data.quantity} stock = {data.stock} onAdd = {onAdd} />

    </div>
  )
}

export default ItemDetails