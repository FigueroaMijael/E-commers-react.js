import React from 'react'
import useFetch from '../../hooks/useFetch'
import CatePagesList from './CatePagesList'
import { Container, Row } from 'react-bootstrap'

const CatePagesContainer = ({catepage}) => {

  const  [cateitems] = useFetch(`https://fakestoreapi.com/products/category/${catepage}`)

  return (
    <Container>
      <Row>
        {
          cateitems !== null &&
          <CatePagesList cateitems = {cateitems} />
        }
      </Row>
    </Container>
  )
}

export default CatePagesContainer