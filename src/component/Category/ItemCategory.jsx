import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ItemCategory = ({ items }) => {
  return (
        <Card>
            <Card.Img src={items.img} />
            <Link to={`/categorias/${items.category}`}><Button>{items.category}</Button></Link>
        </Card>
  )
}

export default ItemCategory