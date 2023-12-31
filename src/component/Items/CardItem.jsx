import React from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardItem = ({item}) => {
  return (
    <Card style={{ width: '18rem' }}className='mx-2 mt-4'>
        <Card.Img  src={item.img} variant="top"  style={{ height: '30%' }} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
                {item.description}
            </Card.Text>
            <Card.Text>
              Price: ${item.price}
            </Card.Text>
            <Card.Text>
                Stock: {item.stock}
            </Card.Text>

            <Link to={`/detalle/${item.id}`}>
            <Button variant='primary'>Ver detalles</Button>
            </Link>
        </Card.Body>
    </Card>
  )
}

export default CardItem