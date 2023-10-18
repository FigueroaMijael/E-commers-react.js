import React from 'react'
import CatePagesContainer from '../component/CatePage/CatePagesContainer'
import { useParams } from 'react-router-dom'

const CatePage = () => {
  const {category} = useParams()
  return (
    <div>      
      <CatePagesContainer category = {category} />
    </div>
    
  )
}

export default CatePage