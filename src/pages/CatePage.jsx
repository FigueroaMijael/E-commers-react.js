import React from 'react'
import CatePagesContainer from '../component/CatePage/CatePagesContainer'
import { useParams } from 'react-router-dom'
const CatePage = () => {
  const {catepage} = useParams()
  return (
    <CatePagesContainer catepage = {catepage} />
  )
}

export default CatePage