import { query } from 'firebase/firestore'
import { getData, getDocuments } from '../../Services/FirebaseServices'
import CategoryList from './CategoryList'

import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'

const CategoryListContainer = () => {
    
  const [data, setData] = useState([])

  useEffect(() => {
    const ItemCollection = getDocuments('products')
    const q = query(ItemCollection)
    getData(q).then(res => setData(res))
    
  }, [])
    
  return (
    <Container>
      <Row>
       {
            data.length > 0 &&
            <CategoryList data={data}/>
        }
      </Row>
    </Container>
  )
}

export default CategoryListContainer