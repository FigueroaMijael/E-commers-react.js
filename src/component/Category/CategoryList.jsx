import React from 'react'
import { Col } from 'react-bootstrap'
import ItemCategory from './ItemCategory'

const CategoryList = ({data}) => {
    const cateUno = data.find(prod => prod.id === 7 )
    const cateDos = data.find(prod => prod.id === 18 )
    const cateTres = data.find(prod => prod.id === 2 )
    const cateCuatro = data.find(prod => prod.id === 13 )
   
  return (
    <div>
        {
            <Col md={4} lg={4} sm={12}>
                <ItemCategory datA={data} cateUno={cateUno} cateDos={cateDos} cateTres={cateTres} cateCuatro={cateCuatro} />
            </Col>
        }
    </div>
  )
}

export default CategoryList