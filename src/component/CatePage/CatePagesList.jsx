import React from 'react'
import { Col } from 'react-bootstrap'
import CatePagesItems from './CatePagesItems'

const CatePagesList = ({datas}) => {

 

  return (
    <>
    {
        datas.map((dat) => (
            <Col md={4} lg={4} sm={12} key={dat.id}>
            <CatePagesItems dat={dat} />
            </Col>
        ))
    }
    </>
  )
}

export default CatePagesList