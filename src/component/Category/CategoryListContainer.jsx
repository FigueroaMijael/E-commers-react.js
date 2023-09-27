import React from 'react'
import useFetch from '../../hooks/useFetch'
import CategoryList from './CategoryList'

const CategoryListContainer = () => {
    const [data] = useFetch(`https://fakestoreapi.com/products`)
    
  return (
    <div>
        {
            data !== null &&
            <CategoryList data={data}/>
        }
    </div>
  )
}

export default CategoryListContainer