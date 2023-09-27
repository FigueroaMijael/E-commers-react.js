import React from 'react'
import { Col } from 'react-bootstrap'
import CatePagesItems from './CatePagesItems'

const CatePagesList = ({cateitems}) => {
  return (
    <div>
    {
        cateitems.map((cateitem) => (
            <Col key={cateitem.id}>
            <CatePagesItems cateitem={cateitem} />
            </Col>
        ))
    }
    </div>
  )
}

export default CatePagesList