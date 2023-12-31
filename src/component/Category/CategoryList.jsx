import React from 'react'
import { Col } from 'react-bootstrap'
import ItemCategory from './ItemCategory'

const CategoryList = ({data}) => {
    const cateUno = data.find(prod => prod.id === '20h68LSZGGUhoztoiihU')
    const cateDos = data.find(prod => prod.id === "4g03VaSe0tB0e64ntCPf")
    const cateTres = data.find(prod => prod.id === "7uMHx008JvCf9T8ThY3O")
    const cateCuatro = data.find(prod => prod.id === "ITiosqSKhZkkn3Lo6PWc")
    const cateCinco = data.find(prod => prod.id === "TFmId1zg4UJqedrZVAKd" )
    const cateSeis = data.find(prod => prod.id === "auqtS0eNdQZtqkAYtSuI")

    const arrayCategory = [cateUno, cateDos, cateTres, cateCuatro, cateCinco, cateSeis]
   
  return (
    <>
        {
          arrayCategory.map((items) => (
            <Col md={4} lg={4} sm={12}>
                <ItemCategory items = {items} />
            </Col>
          ))
        }
    </>
  )
}

export default CategoryList