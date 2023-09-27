import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailsContainer from '../component/Details/ItemDetailsContainer'


function Detalle() {
  const { id } = useParams()

  return (
    <div>
      <ItemDetailsContainer id={id} />
    </div>
  )
}

export default Detalle