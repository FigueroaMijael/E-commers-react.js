import { collection, getFirestore, getDocs, doc, getDoc } from "firebase/firestore"

export const getDocuments = (collectionName) => {
    const fb = getFirestore()
    const collectionRef = collection(fb, collectionName)
    return collectionRef
} 

export const getDocument = (colName, id) => {
    const fb = getFirestore()

    const itemRef = doc(fb, colName, id)

    let data = null

    return getDoc(itemRef).then((snapshot) => {
        if(snapshot.exists()) {
            data = {
              id: snapshot.id,
              ...snapshot.data()
            }
        }
        return data
    })
    .catch((error) => console.log(error))

}

export const getData = (q) => {
    return getDocs(q).then(snapshot => {const allData = snapshot.docs.map(document =>({id: document.id, ...document.data()}))
    return allData
    })}