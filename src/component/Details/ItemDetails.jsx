import React from 'react'
import Counter from '../Counter/Counter'
import { Button } from 'react-bootstrap'

const ItemDetails = ({item}) => {
  return (
    <div>
        <h5>{item.title}</h5>
        <img src={item.image} alt="" className='img'/>
        <p>
            Descripcion: {item.description}
        </p>
        <p>
            Precio: {item.price}
        </p>
        <p>
            Categoria: {item.category}
        </p>
        <Counter />
        <Button>agregar</Button>
    </div>
  )
}

export default ItemDetails