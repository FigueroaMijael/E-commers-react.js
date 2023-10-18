import { query } from 'firebase/firestore'
import { getData, getDocuments } from '../../Services/FirebaseServices'
import CategoryList from './CategoryList'

import { useEffect, useState } from 'react'

const CategoryListContainer = () => {
    
  const [data, setData] = useState([])

  useEffect(() => {
    const ItemCollection = getDocuments('products')
    const q = query(ItemCollection)
    getData(q).then(res => setData(res))
    
  }, [])
    
  return (
    <div>
        {
            data.length > 0 &&
            <CategoryList data={data}/>
        }
    </div>
  )
}

export default CategoryListContainer