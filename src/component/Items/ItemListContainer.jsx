import React from 'react'
import { Container } from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [items] = useFetch('https://fakestoreapi.com/products')
  return (
    <Container>
        <Row>
            {
                items !== null &&
                <ItemList items={items} />
            }
        </Row>
    </Container>
  )
}

export default ItemListContainer