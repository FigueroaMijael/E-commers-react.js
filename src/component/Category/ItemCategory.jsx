import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemCategory = ({cateUno, cateDos, cateTres, cateCuatro, cateCinco, cateSeis}) => {
  return (
    <div>
        <Card>
            <Card.Img src={cateUno.img} />
            <Link to={`/categorias/${cateUno.category}`}><Button>{cateUno.category}</Button></Link>
        </Card>
        <Card>
            <Card.Img src={cateDos.img} />
            <Link to={`/categorias/${cateDos.category}`}><Button>{cateDos.category}</Button></Link>
        </Card>
        <Card>
            <Card.Img src={cateTres.img} />
            <Link to={`/categorias/${cateTres.category}`}><Button>{cateTres.category}</Button></Link>
        </Card>
        <Card>
            <Card.Img src={cateCuatro.img} />
            <Link to={`/categorias/${cateCuatro.category}`}><Button>{cateCuatro.category}</Button></Link>
        </Card>
        <Card>
            <Card.Img src={cateCinco.img} />
            <Link to={`/categorias/${cateCinco.category}`}><Button>{cateCinco.category}</Button></Link>
        </Card>
        <Card>
            <Card.Img src={cateSeis.img} />
            <Link to={`/categorias/${cateSeis.category}`}><Button>{cateSeis.category}</Button></Link>
        </Card>
    </div>
  )
}

export default ItemCategory