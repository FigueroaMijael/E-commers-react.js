import { Container } from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { getData, getDocuments } from '../../Services/FirebaseServices';
import { query } from 'firebase/firestore';



const ItemListContainer = () => {

  const  [items, setItems] = useState([]);


  useEffect(() => {
    const collectionItem = getDocuments('products')

    const q = query(collectionItem)

    getData(q).then(data => setItems(data))
  } ,[])

  return (
    <Container>
        <Row>
            {
                items.length > 0 &&
                <ItemList items={items} />
            }
        </Row>
    </Container>
  )
}

export default ItemListContainer