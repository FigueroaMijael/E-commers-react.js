import React from 'react'
import ItemDetails from './ItemDetails'
import useFetch from '../../hooks/useFetch'

const ItemDetailsContainer = ({ id }) => {
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)
    
  return (
    <div>
        {
            item !== null &&
            <ItemDetails item={item} />
        }
    </div>
  )
}

export default ItemDetailsContainer