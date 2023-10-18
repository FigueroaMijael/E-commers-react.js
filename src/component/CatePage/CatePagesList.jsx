import React from 'react'
import { Col } from 'react-bootstrap'
import CatePagesItems from './CatePagesItems'

const CatePagesList = ({datas}) => {

 

  return (
    <div>
    {
        datas.map((dat) => (
            <Col key={dat.id}>
            <CatePagesItems dat={dat} />
            </Col>
        ))
    }
    </div>
  )
}

export default CatePagesList