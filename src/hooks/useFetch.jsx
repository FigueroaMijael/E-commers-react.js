import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const useFetch = (url) => {
    const [datas, setDatas] = useState(null)
    const {catepage} = useParams()

    const getData = async () => {
        try {
            const response = await fetch(url)
            const datas = await response.json()
            setDatas(datas)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [catepage])

  return [datas]
}

export default useFetch