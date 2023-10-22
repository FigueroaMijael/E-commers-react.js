import CatePagesList from './CatePagesList'
import { Container, Row } from 'react-bootstrap'
import { query, where } from 'firebase/firestore'
import { getData, getDocuments } from '../../Services/FirebaseServices'
import { useEffect, useState } from 'react'

const CatePagesContainer = ({category}) => {

  const [datas, setDatas] = useState([])

  useEffect(() => {
    const ItemCollection = getDocuments('products')
    const q = query(ItemCollection, where("category", "==", category))
    getData(q).then(res => setDatas(res))
    
  }, [category])



  return (

    <Container>
      <Row>
        {
          datas.length > 0 &&
          <CatePagesList datas = {datas}></CatePagesList>
        }
      </Row>
    </Container> 
  ) 
}

export default CatePagesContainer