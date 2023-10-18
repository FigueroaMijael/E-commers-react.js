
import ItemDetails from './ItemDetails'
import React, { useContext, useState, useEffect } from 'react'
import CartContext from '../../Context/CartContext/CartContext'
import { getDocument } from '../../Services/FirebaseServices'


const ItemDetailsContainer = ({id}) => {

  const [data, setData] = useState(null)
    
    const onAdd = (q) => {
      addItem(data, q)
    }

    const {addItem} = useContext(CartContext)
    
    useEffect( () => {
      getDocument('products', id).then(res => setData(res))
  }, [])

console.log(data)
  return (
    <div>
        {
          data !== null &&
          <ItemDetails data={data} onAdd = {onAdd} />
        }
    </div>
  )
}

export default ItemDetailsContainer