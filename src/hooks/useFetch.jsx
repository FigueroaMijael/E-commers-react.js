import React, { useEffect, useState } from 'react'


const useFetch = (url) => {
    const [datas, setDatas] = useState(null)

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
    }, [])

  return [datas]
}

export default useFetch