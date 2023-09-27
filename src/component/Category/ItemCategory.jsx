import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemCategory = ({cateUno, cateDos, cateTres, cateCuatro}) => {
  return (
    <div>
        <Card>
            <Card.Img src={cateUno.image} />
            <Link to={`/categorias/${cateUno.category}`}><Button>{cateUno.category}</Button></Link>
        </Card>
        <Card>
            <Card.Img src={cateDos.image} />
            <Link to={`/categorias/${cateDos.category}`}><Button>{cateDos.category}</Button></Link>
        </Card>
        <Card>
            <Card.Img src={cateTres.image} />
            <Link to={`/categorias/${cateTres.category}`}><Button>{cateTres.category}</Button></Link>
        </Card>
        <Card>
            <Card.Img src={cateCuatro.image} />
            <Link to={`/categorias/${cateCuatro.category}`}><Button>{cateCuatro.category}</Button></Link>
        </Card>
    </div>
  )
}

export default ItemCategory